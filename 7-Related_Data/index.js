// 7-index.js

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
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
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