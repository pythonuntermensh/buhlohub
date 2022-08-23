import { gql } from '@apollo/client';

const GET_TOP_USERS = gql`
  query users {
    users {
      username
      avatar
      reviewsCount
    }
  }
`;

const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      id
      username
      email
      avatar
      reviewsCount
      drinks {
        id
        name
        img
        averageCost
        proof
      }
    }
  }
`;

const GET_DRINKS = gql`
  query drinkFeed($cursor: String) {
    drinkFeed(cursor: $cursor) {
      cursor
      hasNextPage
      drinks {
        id
        createdAt
        name
        img
        averageCost
        proof
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_DRINK = gql`
  query drink($id: ID!) {
    drink(id: $id) {
      id
      createdAt
      name
      img
      averageCost
      proof
      author {
        username
        id
        avatar
      }
    }
  }
`;

const GET_MY_DRINKS = gql`
  query me {
    me {
      id
      username
      drinks {
        id
        createdAt
        name
        img
        averageCost
        proof
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_REVIEWS = gql`
  query reviewFeed($cursor: String) {
    reviewFeed(cursor: $cursor) {
      cursor
      hasNextPage
      reviews {
        id
        createdAt
        title
        author {
          username
        }
        drink {
          name
          img
        }
      }
    }
  }
`;

const GET_REVIEW = gql`
  query review($id: ID!) {
    review(id: $id) {
      id
      createdAt
      title
      text
      author {
        username
        avatar
      }
      drink {
        name
        img
      }
    }
  }
`;

const GET_ME = gql`
  query me {
    me {
      id
      username
      avatar
      drinks {
        id
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export {
  GET_TOP_USERS,
  GET_USER,
  GET_DRINKS,
  GET_DRINK,
  GET_MY_DRINKS,
  GET_REVIEWS,
  GET_REVIEW,
  GET_ME,
  IS_LOGGED_IN
};
