const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Please add you full name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: [true, 'Email already exists'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
        },
        mobile: {
            type: String,
            unique: [true, 'Mobile number already exists'],
            required: [true, 'Please add a mobile number'],
            match: [/^\d{10}$/, 'Please add a valid mobile number'],
        },
        avatar: {
            type: String,
            default: '',
        },
        companyName: {
            type: String,
        },
        companyAddress: {
            type: String,
        },
        gst: {
            type: String,
        },
        drivingLicense: {
            type: String,
        },
        drivingLicenseNumber: {
            type: String,
        },
        profession: {
            type: String,
        },
        pincode: {
            type: String,
            required: [true, 'Please add a pincode'],
        },
        city: {
            type: String,
            required: [true, 'Please add a city'],
        },
        state: {
            type: String,
            required: [true, 'Please add a state'],
        },
        country: {
            type: String,
            required: [true, 'Please add a country'],
            default: 'India',
        },
        role: {
            type: String,
            enum: ['user', 'vendor', 'driver', 'admin'],
            default: 'user',
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            select: false,
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'blocked'],
            default: 'active',
        },
        otp: {
            type: String,
            select: false,
        },
        otpExpiry: {
            type: Date,
            select: false,
        },
        passwordResetToken: String,
        passwordResetExpires: Date,
        passwordChangedAt: Date,
    },
    {
        timestamps: true,
    },
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex')
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000
    return resetToken
}

const User = mongoose.model('User', userSchema)
module.exports = User
