const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { 
    AuthenticationError,
    ForbiddenError
} = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

const gravatar = require('../util/gravatar');

module.exports = {
    newDrink: async (parent, args, { models, user }) => {
        if (!user) {
            throw new AuthenticationError('You must be signed in to add a new drink');
        }

        const model = await models.Drink.create({
            name: args.name,
            img: args.img,
            averageCost: args.averageCost,
            proof: args.proof,
            author: mongoose.Types.ObjectId(user.id),
        });

        await models.User.findByIdAndUpdate(
            user.id,
            {
                $push: {
                    drinks: model.id
                }
            }
        );

        return model;
    },
    deleteDrink: async (parent, args, { models, user }) => {
        if (!user) {
            throw new AuthenticationError('You must be signed in to delete a drink');
        }

        const drink = await models.Drink.findById(args.id);
        if (drink && String(drink.author) !== user.id) {
            throw new ForbiddenError('You don\'t have permissions to delete a drink');
        }

        try {
            await models.Drink.findOneAndRemove({ _id: args.id });

            await models.User.findByIdAndUpdate(
                user.id,
                {
                    $pull: {
                        notes: args.id
                    }
                }
            );

            return true;
        } catch (err) {
            return false;
        }
    },
    newReview: async (parent, args, { models, user }) => {
        if (!user) {
            throw new AuthenticationError('You must be signed in to add a new review');
        }

        const drink = await models.Drink.findById(args.drink);
        
        if (!drink) {
            throw new ForbiddenError('Drink was not found');
        }

        const model = await models.Review.create({
            title: args.title,
            text: args.text,
            drink: mongoose.Types.ObjectId(args.drink),
            author: mongoose.Types.ObjectId(user.id),
        });

        await models.User.findByIdAndUpdate(
            user.id,
            {
                $push: {
                    reviews: model.id
                }
            }
        );
        
        await models.Drink.findByIdAndUpdate(
            args.drink,
            {
                $push: {
                    reviews: model.id
                }
            }
        );

        return model;
    },
    deleteReview: async (parent, args, { models, user }) => {
        if (!user) {
            throw new AuthenticationError('You must be signed in to delete a review');
        }

        const review = await models.Review.findById(args.id);
        if (review && String(review.author) !== user.id) {
            throw new ForbiddenError('You don\'t have permissions to delete a review');
        }

        try {
            await models.Review.findOneAndRemove({ _id: args.id });

            await models.User.findByIdAndUpdate(
                user.id,
                {
                    $pull: {
                        reviews: args.id
                    }
                }
            );

            return true;
        } catch (err) {
            return false;
        }
    },
    changeAvatar: async (parent, args, { models, user }) => {
        if (!user) {
            throw new AuthenticationError('You must be signed in to change your avatar!');
        }

        try {
            await models.User.findByIdAndUpdate(
                user.id,
                {
                    $set: {
                        avatar: args.src
                    }
                }
            );
            return true;
        } catch (err) {
            return false;
        }
    },
    signUp: async (parent, { username, email, password }, { models }) => {
        email = email.trim().toLowerCase();
        const hashedPassword = await bcrypt.hash(password, 10);
        const avatar = gravatar(email);

        try {
            const user = await models.User.create({
                username,
                email,
                avatar,
                password: hashedPassword
            });

            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        } catch (err) {
            console.log('Critical error: ' + err);
            throw new Error('Error creating account');
        }
    },
    signIn: async (parent, { username, email, password }, { models }) => {
        if (!email) {
            email = email.trim().toLowerCase();
        }

        const user = await models.User.findOne({
            $or: [{ email }, { username }]
        });

        if (!user) {
            throw new AuthenticationError('Error signing in');
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new AuthenticationError('Error signing in');
        }

        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    }
};