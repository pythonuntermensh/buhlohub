const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        drink: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drink',
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;