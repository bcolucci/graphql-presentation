// src/server.js
const express = require('express')
const { readFileSync } = require('fs')
const { ApolloServer, gql } = require('apollo-server-express')
const resolvers = require('./resolvers')

const typeDefs = gql(readFileSync('./schema.gql', { encoding: 'utf-8' }))

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen(4000)
