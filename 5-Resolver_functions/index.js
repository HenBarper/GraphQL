// 5-index.js

// For setting up the server, configure it, tell Apollo how to handle our different types of data, and respond to queries and the like
import { ApolloServer } from '@apollo/server'

// Starts the server so we can start listening for requests
import { startStandaloneServer } from '@apollo/server/standalone'

// DB
import db from './_db.js'

// Types
import { typeDefs } from './schema.js'

// For the above import statements to work the type in package.json must be module

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}

// Server setup
const server = new ApolloServer({
    // Typedefs -- Definitions of the types of data
    typeDefs,
    // Resolvers -- Resolver Functions are there for us to handle any incoming requests and return data to the clients
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)