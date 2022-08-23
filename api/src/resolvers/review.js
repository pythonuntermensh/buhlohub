module.exports = {
    author: async (review, args, { models }) => {
        return await models.User.findById(review.author);
    },
    drink: async (review, args, { models }) => {
        return await models.Drink.findById(review.drink);
    },
};