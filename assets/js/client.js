// src/lib/client.js
import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

export default new ApolloClient({ uri: 'http://localhost:4000/graphql', fetch })
