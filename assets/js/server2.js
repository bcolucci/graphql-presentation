// src/server.js
const express = require('express')
const { readFileSync } = require('fs')
const { ApolloServer, gql } = require('apollo-server-express')
const resolvers = require('./resolvers')

const schema = readFileSync('./schema.gql', { encoding: 'utf-8' })

const gqlServer = new ApolloServer({ typeDefs: gql(schema), resolvers })

const app = express()
gqlServer.applyMiddleware({ app })

app.listen(4000)
