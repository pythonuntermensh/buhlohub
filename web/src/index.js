import React from 'react';
import ReactDOM from 'react-dom';
import { 
  ApolloClient, 
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

import App from './App';

const uri = process.env.API_URI || "http://localhost:4000/api";
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

/*const data = {
  isLoggedIn: !!localStorage.getItem('token')
};

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: { data }
});


client.onResetStore(() => cache.modify({ data }));
*/

ReactDOM.render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>,
  document.getElementById('root')
);
