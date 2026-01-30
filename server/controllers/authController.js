const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const sendEmail = require('../utils/email')
const crypto = require('crypto')
const { cookieOptions } = require('../utils/misc')
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000)
}

const sendJwtToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = sendJwtToken(user._id)

    res.cookie('jwt', token, cookieOptions)

    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
    })
}

exports.registerUser = catchAsync(async (req, res, next) => {
    let drivingLicensePath = null;
    const allowedRoles = ['user', 'vendor', 'driver'];

    if (req.body.role && !allowedRoles.includes(req.body.role)) {
        return next(new AppError('Unauthorized access!', 403));
    }

    if (req.file) {
        const fileName = `license-${Date.now()}-${Math.round(Math.random() * 1e9)}.jpeg`;
        const outputPath = path.join("public/license", fileName);

        await sharp(req.file.path)
            .resize(1920)
            .jpeg({ quality: 85 })
            .toFile(outputPath);

        // Delete original temp upload
        await fs.promises.unlink(req.file.path);

        drivingLicensePath = `/licenses/${fileName}`;
    }

    const user = await User.create({
        ...req.body,
        drivingLicense: drivingLicensePath,
    });

    createSendToken(user, 201, res);
});

exports.loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400))
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new AppError('User not found!', 401))
    }

    if (!(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect password!', 401))
    }

    if (user.status === 'blocked') {
        return next(new AppError('Your account has been blocked!', 403))
    }

    createSendToken(user, 200, res)
})

exports.loginViaMobile = catchAsync(async (req, res, next) => {
    const { mobile } = req.body

    if (!mobile) {
        return next(new AppError('Please provide mobile number!', 400))
    }

    const user = await User.findOne({ mobile })

    if (!user) {
        return next(new AppError('User not found!', 404))
    }


    if (user.status === 'blocked') {
        return next(new AppError('Your account has been blocked!', 403))
    }

    const otp = generateOtp()
    user.otp = otp
    user.otpExpiry = new Date(Date.now() + 15 * 60 * 1000)
    await user.save()

    res.status(200).json({
        status: 'success',
        message: 'OTP sent successfully!',
        otp
    })

})

exports.verifyOtp = catchAsync(async (req, res, next) => {
    const { otp, mobile } = req.body

    const user = await User.findOne({ mobile }).select('+otp +otpExpiry')

    if (!user) {
        return next(new AppError('User not found!', 404))
    }

    if (user.otp !== otp) {
        return next(new AppError('Incorrect OTP!', 401))
    }

    if (user.otpExpiry < Date.now()) {
        return next(new AppError('OTP has expired!', 401))
    }

    if (user.status === 'blocked') {
        return next(new AppError('Your account has been blocked!', 403))
    }

    user.otp = undefined
    user.otpExpiry = undefined
    await user.save()

    createSendToken(user, 200, res)

})

exports.logout = catchAsync(async (req, res, next) => {
    res.clearCookie('jwt', cookieOptions)
    res.status(200).json({ status: 'success' })
})

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    console.log(req.cookies.jwt)

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
        return next(new AppError('User no longer exists.', 401));
    }
    req.user = currentUser;
    next();
});

exports.optionalProtect = catchAsync(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    } else if (req.cookies?.jwt) {
        token = req.cookies.jwt
    }

    if (!token) {
        req.user = null
        return next()
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

        const currentUser = await User.findById(decoded.id)

        if (!currentUser) {
            res.clearCookie("jwt", cookieOptions)
            req.user = null
            return next()
        }

        req.user = currentUser
        next()
    } catch (err) {
        res.clearCookie("jwt", cookieOptions)
        req.user = null
        return next()
    }
})

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('Unauthorized access!', 403))
        }
        next()
    }
}

exports.updatePassword = catchAsync(async (req, res, next) => {
    const { currentPassword, newPassword } = req.body

    const user = await User.findById(req.user.id).select('+password')

    if (!(await user.correctPassword(currentPassword, user.password))) {
        return next(new AppError('Current password is incorrect!', 401))
    }

    user.password = newPassword
    await user.save()

    res.status(200).json({
        status: 'success',
        message: 'Password updated successfully!',
    })
})

exports.verifyEmail = catchAsync(async (req, res, next) => {
    const { otp, email } = req.body

    const user = await User.findOne({ email }).select('+otp +otpExpiry')

    if (!user) {
        return next(new AppError('User not found!', 404))
    }

    if (user.otp !== otp) {
        return next(new AppError('Incorrect OTP!', 401))
    }

    if (user.otpExpiry < Date.now()) {
        return next(new AppError('OTP has expired!', 401))
    }

    user.isVerified = true
    user.otp = undefined
    user.otpExpiry = undefined
    await user.save()

    createSendToken(user, 200, res)
})

exports.resendEmailOtp = catchAsync(async (req, res, next) => {
    const { email } = req.body

    const user = await User.findOne({ email }).select('+otp +otpExpiry')

    if (!user) {
        return next(new AppError('User not found!', 404))
    }

    if (user.isVerified) {
        return next(new AppError('User is already verified!', 400))
    }

    const otp = generateOtp()
    user.otp = otp
    user.otpExpiry = new Date(Date.now() + 15 * 60 * 1000)
    await user.save()

    await sendEmail({
        to: email,
        subject: 'Verify Your Email Address',
        text: `Your OTP for email verification is ${otp}. This OTP is valid for 10 minutes.`,
        html: `
                <div style="font-family: Arial, sans-serif; max-width: 520px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h2 style="color: #111827;">Hello ${user.firstName},</h2>

                    <p style="color: #374151; font-size: 15px;">
                        Welcome to <strong>Freecosystem</strong> 👋
                    </p>

                    <p style="color: #374151; font-size: 15px;">
                        Please use the OTP below to verify your email address:
                    </p>

                    <div style="margin: 24px 0; text-align: center;">
                        <span style="font-size: 28px; letter-spacing: 4px; font-weight: bold; color: #111827;">
                            ${otp}
                        </span>
                    </div>

                    <p style="color: #6b7280; font-size: 14px;">
                        This OTP is valid for <strong>10 minutes</strong>.  
                        Do not share it with anyone for security reasons.
                    </p>

                    <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

                    <p style="color: #6b7280; font-size: 13px;">
                        If you did not request this, you can safely ignore this email.
                    </p>

                    <p style="color: #374151; font-size: 14px; margin-top: 16px;">
                        Best regards,<br />
                        <strong>Freecosystem Team</strong>
                    </p>
                </div>
            `,
    })

    res.status(200).json({
        status: 'success',
        message: 'OTP sent successfully!',
    })
})

exports.forgotPassword = catchAsync(async (req, res, next) => {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        return next(new AppError('User not found!', 404))
    }

    if (!user.isVerified) {
        return next(new AppError('User is not verified!', 400))
    }

    try {
        const resetToken = user.createPasswordResetToken()
        await user.save({ validateBeforeSave: false })

        const resetURL = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`

        await sendEmail({
            to: email,
            subject: 'Reset your password',
            html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8" />
                    <title>Reset Your Password</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </head>
                    <body style="margin:0; padding:0; background-color:#f6f6f6; font-family: Arial, Helvetica, sans-serif;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6; padding:30px 0;">
                        <tr>
                        <td align="center">
                            <table width="100%" max-width="600" cellpadding="0" cellspacing="0"
                            style="background-color:#ffffff; border-radius:8px; overflow:hidden; max-width:600px;">

                            <!-- Header -->
                            <tr>
                                <td style="background-color:#FA812F; padding:24px; text-align:center;">
                                <h1 style="margin:0; color:#ffffff; font-size:24px;">Freecosystem</h1>
                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding:32px; color:#333333;">
                                <h2 style="margin-top:0;">Hello ${user.firstName},</h2>

                                <p style="font-size:15px; line-height:1.6;">
                                    Welcome to <strong>Freecosystem</strong> 👋  
                                    We received a request to reset your password.
                                </p>

                                <p style="font-size:15px; line-height:1.6;">
                                    Click the button below to set a new password:
                                </p>

                                <!-- Button -->
                                <div style="text-align:center; margin:32px 0;">
                                    <a href="http://localhost:3001/reset-password/c4429a0ceb368a986a07da6a00863e7587628afe6552719f4fb221648950cfd5"
                                    style="
                                        background-color:#FA812F;
                                        color:#ffffff;
                                        padding:14px 28px;
                                        text-decoration:none;
                                        border-radius:6px;
                                        font-weight:bold;
                                        display:inline-block;
                                    ">
                                    Reset Password
                                    </a>
                                </div>

                                <p style="font-size:14px; color:#555555; line-height:1.6;">
                                    If you didn’t request this, you can safely ignore this email.
                                </p>

                                <p style="font-size:14px; color:#555555; line-height:1.6;">
                                    This link may expire for security reasons.
                                </p>

                                <p style="margin-top:32px;">
                                    Best regards,<br />
                                    <strong>Freecosystem Team</strong>
                                </p>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color:#fafafa; padding:16px; text-align:center; font-size:12px; color:#888888;">
                                © 2025 Freecosystem | All rights reserved.
                                </td>
                            </tr>

                            </table>
                        </td>
                        </tr>
                    </table>

                    </body>
                    </html>`,
            text: `Please use the following link to reset your password: ${resetURL}`,
        })

        res.status(200).json({
            status: 'success',
            message: 'Password reset link sent to your email!',
        })
    } catch (error) {
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save({ validateBeforeSave: false })
        return next(new AppError('There was an error sending the email. Try again later!', 500))
    }
})

exports.resetPassword = catchAsync(async (req, res, next) => {
    const { password } = req.body

    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    })

    if (!user) {
        return next(new AppError('Token is invalid or has expired!', 400))
    }

    user.password = password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()

    res.status(200).json({
        status: 'success',
        message: 'Password updated successfully!',
    })
})
