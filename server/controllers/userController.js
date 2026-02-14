const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })
})

exports.getUser = catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})

exports.getCurrentUser = catchAsync(async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: req.user
        }
    })
})

exports.updateCurrentUser = catchAsync(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.user.id,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country
        },
        {
            new: true,
            runValidators: true
        })
    res.status(200).json({
        status: 'success',
        message: 'Profile updated successfully!'
    })
})

exports.uploadUserImage = catchAsync(async (req, res, next) => {
    if (!req.file) return next(new AppError("No file uploaded!", 400));
    const ext = path.extname(req.file.originalname).toLowerCase();
    const fileName = `profile-${req.user.id}-${Date.now()}${ext}`;
    const newPath = path.join("public/profile", fileName);

    const tempPath = path.join("public/profile", `temp-${Date.now()}-${fileName}`);

    const user = await User.findById(req.user.id);
    if (!user) return next(new AppError("User not found!", 404));

    await sharp(req.file.path)
        .resize(800, 800)
        .jpeg({ quality: 85 })
        .toFile(tempPath);

    fs.renameSync(tempPath, newPath);

    fs.unlinkSync(req.file.path);

    if (user.avatar) {
        const avatarPath = path.join(__dirname, "../public", user.avatar);

        if (fs.existsSync(avatarPath)) {
            fs.unlinkSync(avatarPath);
        }
    }

    const imagePath = `/profile/${fileName}`;

    user.avatar = imagePath;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        status: "success",
        message: "Profile image uploaded successfully!",
        data: { imagePath },
    });
});

exports.deleteUser = catchAsync(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status: 'success',
        data: null
    })
})

// Driver APIs

exports.addDriver = catchAsync(async (req, res) => {
    const payload = {
        ...req.body,
        role: 'driver',
        addedBy: req.user._id
    }

    console.log(payload)

    const driver = await User.create(payload)
    res.status(201).json({
        status: "success",
        message: "Driver added successfully!",
        data: { driver },
    });
})

exports.getAllDrivers = catchAsync(async (req, res) => {
    const drivers = await User.find({ role: 'driver' })
    res.status(200).json({
        status: 'success',
        results: drivers.length,
        data: {
            drivers
        }
    })
})

exports.getCurrentVendorDriver = catchAsync(async (req, res) => {
    const drivers = await User.find({ role: 'driver', addedBy: req.user._id })

    res.status(200).json({
        status: 'success',
        data: {
            drivers
        }
    })
})