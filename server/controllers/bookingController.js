const Machinery = require('../models/machineryModel')
const Booking = require("../models/bookingModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createBooking = catchAsync(async (req, res, next) => {

    const { vehicleId, startDateTime, endDateTime, location } = req.body;

    if (!vehicleId || !startDateTime || !endDateTime) {
        return next(new AppError("Start and end date/time required", 400));
    }

    const vehicle = await Machinery.findById(vehicleId);

    if (!vehicle) {
        return next(new AppError("Vehicle not found", 404));
    }

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    if (end <= start) {
        return next(new AppError("End time must be after start time", 400));
    }

    // 🔒 Prevent double booking
    const existingBooking = await Booking.findOne({
        vehicle: vehicleId,
        status: { $in: ["pending", "confirmed", "driver_assigned", "started"] },
        startDateTime: { $lt: end },
        endDateTime: { $gt: start }
    });

    if (existingBooking) {
        return next(new AppError("Vehicle already booked for selected time range", 400));
    }

    const diffMs = end - start;
    const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));

    if (totalHours <= 0) {
        return next(new AppError("Invalid booking duration", 400));
    }

    const hourlyRate = Number(vehicle.baseHourlyRate) || 0;
    const dailyRate = Number(vehicle.dailyCapPrice) || 0;
    const weeklyRate = Number(vehicle.weeklyCapPrice) || 0;
    const monthlyRate = Number(vehicle.monthlyCapPrice) || 0;

    let amount = 0;

    // ✅ 1️⃣ 4 hours or less → hourly
    if (totalHours <= 4) {
        amount = totalHours * hourlyRate;
    } else {

        let totalDays = Math.floor(totalHours / 24);
        let remainingHours = totalHours % 24;

        // ✅ 2️⃣ Monthly blocks (30 days)
        const months = Math.floor(totalDays / 30);
        amount += months * monthlyRate;
        totalDays = totalDays % 30;

        // ✅ 3️⃣ Weekly blocks (7 days)
        const weeks = Math.floor(totalDays / 7);
        amount += weeks * weeklyRate;
        totalDays = totalDays % 7;

        // ✅ 4️⃣ Remaining days (3–6 day weekly cap logic)
        if (totalDays > 0) {
            let dailyAmount = totalDays * dailyRate;

            if (totalDays > 2 && totalDays < 7) {
                dailyAmount = Math.min(dailyAmount, weeklyRate);
            }

            amount += dailyAmount;
        }

        // ✅ 5️⃣ Remaining hours
        if (remainingHours > 0) {
            if (remainingHours <= 4) {
                amount += remainingHours * hourlyRate;
            } else {
                amount += dailyRate;
            }
        }
    }

    const booking = await Booking.create({
        user: req.user._id,
        vehicle: vehicleId,
        startDateTime: start,
        endDateTime: end,
        totalHours,
        totalAmount: amount,
        location,
        status: "pending"
    });

    res.status(201).json({
        success: true,
        data: booking
    });

});

exports.getBooking = catchAsync(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id).populate("vehicle").populate("user");

    if (!booking) {
        return next(new AppError("Booking not found", 404));
    }

    res.status(200).json({
        success: true,
        data: booking
    });
});

exports.getVendorBookings = catchAsync(async (req, res, next) => {

    const bookings = await Booking.find()
        .populate({
            path: "vehicle",
            match: { vendor: req.user._id } // important
        })
        .populate("user")
        .populate("driver");

    // Remove null (not vendor vehicles)
    const filtered = bookings.filter(b => b.vehicle);

    res.status(200).json({
        success: true,
        data: filtered
    });
});

exports.assignDriver = catchAsync(async (req, res, next) => {
    const { bookingId } = req.params;
    const { driverId } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
        return next(new AppError("Booking not found", 404));
    }

    booking.driver = driverId;
    booking.status = "driver_assigned";

    await booking.save();

    res.status(200).json({
        success: true,
        message: "Driver assigned successfully",
        data: booking,
    });
});

exports.getDriverBookings = catchAsync(async (req, res, next) => {
    const bookings = await Booking.find({ driver: req.user._id }).populate("vehicle").populate("user");

    res.status(200).json({
        success: true,
        data: bookings
    });
});

exports.updateBookingStatus = catchAsync(async (req, res, next) => {
    const { bookingId } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
        "pending",
        "confirmed",
        "driver_assigned",
        "started",
        "on_the_way",
        "reached",
        "pending_payment",
        "completed",
        "cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
        return next(new AppError("Invalid status update", 400));
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
        return next(new AppError("Booking not found", 404));
    }

    booking.status = status;
    await booking.save();

    res.status(200).json({
        success: true,
        message: "Booking status updated",
        data: booking,
    });
});

exports.getMyBookings = catchAsync(async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user._id })
            .populate("vehicle")
            .populate("driver");

        res.json({
            success: true,
            data: bookings,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getAllBookings = catchAsync(async (req, res, next) => {
    try {
        const bookings = await Booking.find()
            .populate("user")
            .populate("vehicle")
            .populate("driver");

        res.json({
            success: true,
            data: bookings,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});