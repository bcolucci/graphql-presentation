// src/lib/withApollo.js
import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const GRAPHQL_URL = 'http://localhost:4000/graphql'

export default withApollo(({ initialState }) => {
  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({ uri: GRAPHQL_URL, cache })
})
