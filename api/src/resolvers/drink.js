module.exports = {
    author: async (drink, args, { models }) => {
        return await models.User.findById(drink.author);
    },
    reviews: async (drink, args, { models }) => {
        return await models.Review.find({ drink: drink._id }).sort({ _id: -1 });
    }
};