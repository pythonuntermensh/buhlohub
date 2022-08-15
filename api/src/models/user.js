const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: { 
            type: String, 
            required: true,
            index: { unique: true }
        },
        password: { 
            type: String, 
            required: true
        },
        avatar: {
            type: String
        },
        reviewsCount: {
            type: Number,
            default: 0
        },
        drinks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Drink',
            }
        ]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;