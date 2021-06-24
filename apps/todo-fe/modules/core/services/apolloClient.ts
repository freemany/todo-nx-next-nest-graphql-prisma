import { ApolloClient, InMemoryCache } from '@apollo/client';

const gqlUrl = 'http://localhost:3333/graphql';

const client = new ApolloClient({
  uri: gqlUrl,
  cache: new InMemoryCache(),
});

export default client;
