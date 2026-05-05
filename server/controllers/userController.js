// const fs = require('fs')
// const path = require('path')
// const sharp = require('sharp')
// const User = require('../models/userModel')
// const catchAsync = require('../utils/catchAsync')
// const AppError = require('../utils/appError')

// exports.getAllUsers = catchAsync(async (req, res) => {
//     const users = await User.find()
//     res.status(200).json({
//         status: 'success',
//         results: users.length,
//         data: {
//             users
//         }
//     })
// })

// exports.getUser = catchAsync(async (req, res) => {
//     const user = await User.findById(req.params.id)
//     res.status(200).json({
//         status: 'success',
//         data: {
//             user
//         }
//     })
// })

// exports.getCurrentUser = catchAsync(async (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         data: {
//             user: req.user
//         }
//     })
// })

// exports.updateCurrentUser = catchAsync(async (req, res) => {
//     const user = await User.findByIdAndUpdate(req.user.id,
//         {
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             gender: req.body.gender,
//             pincode: req.body.pincode,
//             city: req.body.city,
//             state: req.body.state,
//             country: req.body.country
//         },
//         {
//             new: true,
//             runValidators: true
//         })
//     res.status(200).json({
//         status: 'success',
//         message: 'Profile updated successfully!'
//     })
// })

// exports.uploadUserImage = catchAsync(async (req, res, next) => {
//     if (!req.file) return next(new AppError("No file uploaded!", 400));
//     const ext = path.extname(req.file.originalname).toLowerCase();
//     const fileName = `profile-${req.user.id}-${Date.now()}${ext}`;
//     const newPath = path.join("public/profile", fileName);

//     const tempPath = path.join("public/profile", `temp-${Date.now()}-${fileName}`);

//     const user = await User.findById(req.user.id);
//     if (!user) return next(new AppError("User not found!", 404));

//     await sharp(req.file.path)
//         .resize(800, 800)
//         .jpeg({ quality: 85 })
//         .toFile(tempPath);

//     fs.renameSync(tempPath, newPath);

//     fs.unlinkSync(req.file.path);

//     if (user.avatar) {
//         const avatarPath = path.join(__dirname, "../public", user.avatar);

//         if (fs.existsSync(avatarPath)) {
//             fs.unlinkSync(avatarPath);
//         }
//     }

//     const imagePath = `/profile/${fileName}`;

//     user.avatar = imagePath;
//     await user.save({ validateBeforeSave: false });

//     res.status(200).json({
//         status: "success",
//         message: "Profile image uploaded successfully!",
//         data: { imagePath },
//     });
// });

// exports.deleteUser = catchAsync(async (req, res) => {
//     await User.findByIdAndDelete(req.params.id)
//     res.status(204).json({
//         status: 'success',
//         data: null
//     })
// })

// // Driver APIs

// exports.addDriver = catchAsync(async (req, res) => {
//     const payload = {
//         ...req.body,
//         role: 'driver',
//         addedBy: req.user._id
//     }

//     console.log(payload)

//     const driver = await User.create(payload)
//     res.status(201).json({
//         status: "success",
//         message: "Driver added successfully!",
//         data: { driver },
//     });
// })

// exports.getAllDrivers = catchAsync(async (req, res) => {
//     const drivers = await User.find({ role: 'driver' })
//     res.status(200).json({
//         status: 'success',
//         results: drivers.length,
//         data: {
//             drivers
//         }
//     })
// })

// exports.getCurrentVendorDriver = catchAsync(async (req, res) => {
//     const drivers = await User.find({ role: 'driver', addedBy: req.user._id })

//     res.status(200).json({
//         status: 'success',
//         data: {
//             drivers
//         }
//     })
// })



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

// ADD THESE NEW FUNCTIONS:

// Delete a driver (vendor can delete their own drivers only)
exports.deleteDriver = catchAsync(async (req, res) => {
    const { driverId } = req.params;
    
    // Find driver and ensure it belongs to this vendor
    const driver = await User.findOne({ 
        _id: driverId, 
        role: 'driver',
        addedBy: req.user._id 
    });
    
    if (!driver) {
        throw new AppError('Driver not found or does not belong to you', 404);
    }
    
    // Delete driver's avatar if exists
    if (driver.avatar) {
        const avatarPath = path.join(__dirname, "../public", driver.avatar);
        if (fs.existsSync(avatarPath)) {
            fs.unlinkSync(avatarPath);
        }
    }
    
    await User.findByIdAndDelete(driverId);
    
    res.status(200).json({
        status: 'success',
        message: 'Driver deleted successfully'
    });
});

// Update a driver (vendor can update their own drivers only)
exports.updateDriver = catchAsync(async (req, res) => {
    const { driverId } = req.params;
    const { fullName, email, mobile, drivingLicenseNumber, aadharNumber, password } = req.body;
    
    // Find driver and ensure it belongs to this vendor
    const driver = await User.findOne({ 
        _id: driverId, 
        role: 'driver',
        addedBy: req.user._id 
    });
    
    if (!driver) {
        throw new AppError('Driver not found or does not belong to you', 404);
    }
    
    // Check if email is being changed and if it's already taken
    if (email && email !== driver.email) {
        const existingUser = await User.findOne({ email, _id: { $ne: driverId } });
        if (existingUser) {
            throw new AppError('Email already in use by another user', 400);
        }
    }
    
    // Check if mobile is being changed and if it's already taken
    if (mobile && mobile !== driver.mobile) {
        const existingUser = await User.findOne({ mobile, _id: { $ne: driverId } });
        if (existingUser) {
            throw new AppError('Mobile number already in use by another user', 400);
        }
    }
    
    // Update fields
    if (fullName) driver.fullName = fullName;
    if (email) driver.email = email;
    if (mobile) driver.mobile = mobile;
    if (drivingLicenseNumber) driver.drivingLicenseNumber = drivingLicenseNumber;
    if (aadharNumber) driver.aadharNumber = aadharNumber;
    if (password) {
        driver.password = password;
    }
    
    await driver.save();
    
    // Remove password from output
    driver.password = undefined;
    
    res.status(200).json({
        status: 'success',
        message: 'Driver updated successfully',
        data: { driver }
    });
});