const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Machinery",
            required: true,
        },

        startDateTime: {
            type: Date,
            required: true,
        },

        endDateTime: {
            type: Date,
            required: true,
        },

        totalHours: {
            type: Number,
            required: true,
        },

        totalAmount: {
            type: Number,
            required: true,
        },

        location: {
            address: String,
            lat: Number,
            lng: Number,
        },

        driver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "driver_assigned",
                "on_the_way",
                "started",
                "completed",
                "cancelled",
            ],
            default: "pending",
        },

    },
    { timestamps: true }
)

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
