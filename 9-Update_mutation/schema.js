// 8-schema.js

// We have to export our typeDefs so they can be imported into our GraphQL server
export const typeDefs = `#graphql
    type Game {
        id: ID
        title: String!
        platform: [String!]!
        reviews: [Review!] # Can be nullable if there are no associated reviews
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!] # Can be nullable if the author hasn't written any reviews
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput!): Game
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input EditGameInput { # We're creating a new input since we don't need all the parameters to be required
        title: String, # We may want to just update the title or platforms, not both
        platform: [String!]
    }
`
// Add curly braces around the data type to make it an array

// 5 scalar types - int, float, string, boolean, ID