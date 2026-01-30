const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const Machinery = require('../models/machineryModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.getAllMachinery = catchAsync(async (req, res) => {
    const machinery = await Machinery.find()
    res.status(200).json({
        status: 'success',
        results: machinery.length,
        data: {
            machinery
        }
    })

})

exports.getMachinery = catchAsync(async (req, res) => {
    const machinery = await Machinery.findOne({ slug: req.params.id })

    if (!machinery) return next(new AppError('Machinery not found!', 404))

    res.status(200).json({
        status: 'success',
        data: {
            machinery
        }
    })
})

exports.getCurrentUserMachinery = catchAsync(async (req, res) => {
    const machinery = await Machinery.find({ vendor: req.user.id })
    res.status(200).json({
        status: 'success',
        results: machinery.length,
        data: {
            machinery
        }
    })
})

exports.addMachinery = catchAsync(async (req, res, next) => {
    req.body.vendor = req.user.id;

    // ================= IMAGE PROCESSING =================
    let imagePaths = [];

    if (req.files && req.files.length > 0) {
        req.body.images = [];

        await Promise.all(
            req.files.map(async (file) => {
                const tempPath = file.path + "-temp.jpeg";

                await sharp(file.path)
                    .resize(1920)
                    .jpeg({ quality: 85 })
                    .toFile(tempPath);   // write to temp

                fs.unlinkSync(file.path);   // delete original

                fs.renameSync(tempPath, file.path); // replace with optimized

                req.body.images.push(
                    "/" + path.relative("public", file.path).replace(/\\/g, "/")
                );
            })
        );
    }

    // req.body.images = imagePaths;

    // ================= LOCATION HANDLING =================
    if (req.body.latitude && req.body.longitude) {
        req.body.location = {
            type: "Point",
            coordinates: [Number(req.body.longitude), Number(req.body.latitude)],
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        };
    }

    // ================= CREATE MACHINERY =================
    const machinery = await Machinery.create(req.body);

    res.status(201).json({
        status: "success",
        message: "Machinery added successfully!",
        data: { machinery },
    });
});

exports.editMachinery = catchAsync(async (req, res) => {
    const machinery = await Machinery.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!machinery) return next(new AppError('Machinery not found!', 404))

    res.status(200).json({
        status: 'success',
        message: 'Machinery updated successfully!'
    })
})