module.exports = {
    drinks: async (parent, args, { models }) => {
        return await models.Drink.find().limit(100);
    },
    drink: async (parent, args, { models }) => {
        return await models.Drink.findById(args.id);
    },
    drinkFeed: async (parent, { cursor }, { models }) => {
        const limit = 12;
        let hasNextPage = false;
        let cursorQuery = {};

        if (cursor) {
            cursorQuery = { _id: { $lt: cursor } } ;
        }

        let drinks = await models.Drink.find(cursorQuery)
            .sort({ _id: -1 })
            .limit(limit + 1);

        if (drinks.length > limit) {
            hasNextPage = true;
            drinks = drinks.slice(0, -1);
        }

        if (drinks.length < 1) {
            throw new Error('No drinks found');
        } 

        const newCursor = drinks[drinks.length - 1]._id;

        return {
            drinks,
            cursor: newCursor,
            hasNextPage
        };

    },
    user: async (parent, args, { models }) => {
        return await models.User.findOne({ username: args.username });
    },
    users: async (parent, args, { models }) => {
        return await models.User.find().sort({ reviewsCount: 1 }).limit(10);
    },
    me: async (parent, args, { models, user }) => {
        return await models.User.findById(user.id);
    }
};