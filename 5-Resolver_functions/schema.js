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
        reating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`
// Add curly braces around the data type to make it an array

// 5 scalar types - int, float, string, boolean, ID