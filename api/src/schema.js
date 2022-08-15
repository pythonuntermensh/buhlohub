const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar DateTime

    type Drink {
        id: ID!
        name: String!
        img: String!
        averageCost: Int!
        proof: Int!
        author: User!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        avatar: String
        reviewsCount: Int
        drinks: [Drink!]!
    }

    type DrinkFeed {
        drinks: [Drink!]!
        cursor: String!
        hasNextPage: Boolean!
    }

    type Query {
        drinks: [Drink!]!
        drink(id: ID!): Drink!
        drinkFeed(cursor: String): DrinkFeed
        user(username: String!): User
        users: [User!]!
        me: User!
    }

    type Mutation {
        newDrink(name: String!, img: String!, averageCost: Int!, proof: Int!): Drink
        deleteDrink(id: ID!): Boolean!
        changeAvatar(src: String!): Boolean!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
    }
`;