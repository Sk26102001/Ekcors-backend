const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid');
const slugify = require('slugify')

const machinerySchema = new mongoose.Schema(
    {
        vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                'Excavator',
                'Bulldozer',
                'Crane',
                'Loader',
                'Dump Truck',
                'Concrete Mixer',
                'Roller',
                'Grader',
                'Backhoe',
                'Other'
            ]
        },

        brand: String,
        model: String,
        year: Number,

        capacity: {
            type: String
        },

        fuelType: {
            type: String,
            enum: ['Diesel', 'Electric', 'Petrol', 'Hybrid']
        },

        transmission: {
            type: String,
            enum: ['Manual', 'Automatic', 'Hydraulic']
        },

        condition: {
            type: String,
            enum: ['New', 'Like New', 'Good', 'Used'],
            default: 'Good'
        },

        pricePerHour: Number,
        pricePerDay: Number,
        pricePerMonth: Number,

        availability: {
            type: Boolean,
            default: true
        },

        images: [
            {
                type: String
            }
        ],

        location: {
            type: {
                type: String,
                enum: ['Point'],
                default: 'Point'
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true
            },
            address: String,
            city: String,
            state: String,
            pincode: String
        },
        slug: String
    },
    {
        timestamps: true,
    },
)

machinerySchema.pre('save', function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

const Machinery = mongoose.model('Machinery', machinerySchema)
module.exports = Machinery
