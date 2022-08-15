module.exports = {
    author: async (note, args, { models }) => {
        return await models.User.findById(note.author);
    }
};