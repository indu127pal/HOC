import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { Alert } from 'react-native';
import { GRAPHQL_URL } from './constants';

const API_URL = GRAPHQL_URL;

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      const graphQLdErrorMessage = _.map(graphQLErrors, 'message').join('\n');
      const networkErrorMessage = _.get(networkError, 'message');
      const defaultErrorMessage = 'Something went wrong. Please try again';
      Alert.alert(
        'Oops',
        graphQLdErrorMessage || networkErrorMessage || defaultErrorMessage
      );
    }),
    new HttpLink({
      uri: API_URL
    })
  ]),
  cache: new InMemoryCache()
});

export default client;