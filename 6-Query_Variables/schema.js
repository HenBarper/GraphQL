// 5-schema.js

// We have to export our typeDefs so they can be imported into our GraphQL server
export const typeDefs = `#graphql
    type Game {
        id: ID
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
`
// Add curly braces around the data type to make it an array

// 5 scalar types - int, float, string, boolean, ID