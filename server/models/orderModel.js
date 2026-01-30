const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid');

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
        },

    },
    {
        timestamps: true,
    },
)

orderSchema.pre('save', function (next) {
    const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 10);

    if (!this.orderId) {
        this.orderId = nanoid();
    }

    next();
});

const Machinery = mongoose.model('Order', orderSchema)
module.exports = Machinery
