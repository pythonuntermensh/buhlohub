module.exports = {
    drinks: async (user, args, { models }) => {
        return await models.Drink.find({ author: user._id }).sort({ _id: -1 });
    }
};