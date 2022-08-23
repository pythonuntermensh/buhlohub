const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        averageCost: {
            type: Number,
            default: 0
        },
        proof: {
            type: Number,
            default: 0
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review',
            }
        ]
    },
    {
        timestamps: true
    }
);

const Drink = mongoose.model('Drink', DrinkSchema);
module.exports = Drink;