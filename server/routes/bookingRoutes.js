const { Router } = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const bookingRouter = Router();

bookingRouter.get("/my-bookings", authController.protect, bookingController.getMyBookings);

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

bookingRouter.get(
    "/driver-bookings",
    authController.protect,
    // authController.restrictTo("vendor"),
    bookingController.getDriverBookings
);

bookingRouter.patch(
    "/update-status/:bookingId",
    authController.protect,
    bookingController.updateBookingStatus
);

bookingRouter.post("/", authController.protect, bookingController.createBooking);
bookingRouter.get("/", authController.protect, authController.restrictTo("admin"), bookingController.getAllBookings);
bookingRouter.get("/:id", authController.protect, bookingController.getBooking);

module.exports = bookingRouter