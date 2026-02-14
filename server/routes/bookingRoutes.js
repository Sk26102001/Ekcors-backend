const { Router } = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const bookingRouter = Router();

bookingRouter.post("/", authController.protect, bookingController.createBooking);
bookingRouter.get("/my-bookings", authController.protect, bookingController.getMyBookings);

bookingRouter.get("/", authController.protect, authController.restrictTo("admin"), bookingController.getAllBookings);
bookingRouter.patch(
    "/assign-driver/:bookingId",
    authController.protect,
    // authController.restrictTo("admin"),
    bookingController.assignDriver
);

bookingRouter.get(
    "/vendor-bookings",
    authController.protect,
    // authController.restrictTo("vendor"),
    bookingController.getVendorBookings
);

bookingRouter.patch(
    "/update-status/:bookingId",
    authController.protect,
    bookingController.updateBookingStatus
);

module.exports = bookingRouter