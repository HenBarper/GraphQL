// For setting up the server, configure it, tell Apollo how to handle our different types of data, and respond to queries and the like
import { ApolloServer } from '@apollo/server'

// Starts the server so we can start listening for requests
import { startStandaloneServer } from '@apollo/server/standalone'

// For the above import statements to work the type in package.json must be module


// Server setup
const server = new ApolloServer({
    // Typedefs
    // Resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)