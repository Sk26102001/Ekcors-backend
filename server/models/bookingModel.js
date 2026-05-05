const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid');

const bookingSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
        },
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
                "started",
                "on_the_way",
                "reached",
                "pending_payment",
                "completed",
                "cancelled",
            ],
            default: "pending",
        },

    },
    { timestamps: true }
)

bookingSchema.pre('save', function (next) {
    const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 10);

    if (!this.orderId) {
        this.orderId = nanoid();
    }

    next();
});

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
