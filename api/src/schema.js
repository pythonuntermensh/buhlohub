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
        reviews: [Review!]!
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
        reviews: [Review!]!
    }

    type Review {
        id: ID!
        title: String!
        text: String!
        author: User!
        drink: Drink!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type ReviewFeed {
        reviews: [Review!]!
        cursor: String!
        hasNextPage: Boolean!
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
        reviews: [Review!]!
        review(id: ID!): Review!
        reviewFeed(cursor: String): ReviewFeed
        user(username: String!): User
        users: [User!]!
        me: User!
    }

    type Mutation {
        newDrink(name: String!, img: String!, averageCost: Int!, proof: Int!): Drink
        deleteDrink(id: ID!): Boolean!
        newReview(title: String!, text: String!, drink: ID!): Review
        deleteReview(id: ID!): Boolean!
        changeAvatar(src: String!): Boolean!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
    }
`;