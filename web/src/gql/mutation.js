import { gql } from '@apollo/client';

const NEW_DRINK = gql`
  mutation newDrink($name: String!, $img: String!, $averageCost: Int!, $proof: Int!) {
    newNote(name: $name, img: $img, averageCost: $averageCost, proof: $proof) {
      id
      name
      img
      averageCost
      proof
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const DELETE_DRINK = gql`
  mutation deleteDrink($id: ID!) {
    deleteDrink(id: $id)
  }
`;

const CHANGE_AVATAR = gql`
  mutation changeAvatar($src: String!) {
    changeAvatar(src: $src)
  }
`;

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
  NEW_DRINK,
  DELETE_DRINK,
  CHANGE_AVATAR,
  SIGNIN_USER,
  SIGNUP_USER
};
