module.exports = {
    drinks: async (user, args, { models }) => {
        return await models.Drink.find({ author: user._id }).sort({ _id: -1 });
    },
    reviews: async (user, args, { models }) => {
        return await models.Review.find({ author: user._id }).sort({ _id: -1 });
    }
};