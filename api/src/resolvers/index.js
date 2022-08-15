const Query = require('./query');
const Mutation = require('./mutation');
const User = require('./user');
const Drink = require('./drink');
const { GraphQLDateTime } = require('graphql-iso-date');

module.exports = {
    Query,
    Mutation,
    User,
    Drink,
    DateTime: GraphQLDateTime
};
