# GraphQL
[Introductory GraphQL tutorial](https://www.youtube.com/watch?v=xMCnDesBggM&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&t=11s)

## Sections
<a name="Sections"></a>
1. [What is GraphQL?](#What_is_GraphQL)
2. [Query Basics](#Query_Basics)
3. [Making a GraphQL Server](#Making_a_GraphQL_Server)
4. [Schema and Types](#Schema_and_Types)
5. [Resolver Functions](#Resolver_Functions)
6. [Query Variables](#Query_Variables)
7. [Related Data](#Related_Data)
8. [Mutations](#Mutations)
9. [Update Mutation](#Update_Mutation)

[Useful Commands](#Useful_Commands)
[Other](#Other)

[Credits](#Credits)
__________________________________________________________________________________________________________________________________________
<a name="What_is_GraphQL"></a>
## 1. What is GraphQL? - [video](https://www.youtube.com/watch?v=xMCnDesBggM&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&t=11s)

#### What is it?
- GraphQL is a query language
    - A specific syntax that we can use to query a server to request or mutate data
- Kind of like an alternative to the more traditional approach of sending standard requests to a rest API using endpoints
- GraphQL still uses http requests under the hood.
    - GraphQL gives us more flexibility and control about how we make requests and what data we want to fetch or mutate.
- GraphQL prevents over fetching and under fetching.

#### How to use it
- When we send a request using GraphQL to a server, we typically do that to a single endpoint
    - `https://www.website.com/api-endpoint`
- We'd use a special GraphQL syntax to specifify the data we want to get back
```
Query {
    books {
        title,
        author,
        price
    }
}
```
- This gives us back the title, author, and price of books from the books category
    - The books category may have many other fields we don't need for this request
- With GraphQL we can also fetch nested related data
```
Query {
    course(id: "1") {
        id,
        title,
        author {
            name,
            id,
            courses {
                id,
                title
            }
        }
    }
}
```
- The above example would give us the course with id 1, the author of that course, and any related data(name, id, courses and any related data(id, title))
    - By nesting in this way we can essentially get the course, it's author, and all the other classes that author teaches/taught

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Query_Basics"></a>
## 2. Query Basics - [video](https://www.youtube.com/watch?v=39CPVkZE4nM&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=2)
- In this lesson we look at examples of how to query a database running on a nodemon server using studio.apollographql.com

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Making_a_GraphQL_Server"></a>
## 3. Making a GraphQL Server - [video](https://www.youtube.com/watch?v=q6MxsS2iPnw&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=3)
[Getting Started with GraphQL on studio.apollographql.com documentation](https://www.apollographql.com/docs/apollo-server/getting-started#step-1-create-a-new-project)
1. We start by getting into our project directory
2. Then we Initialize a new Node.js project with npm (or another package manager you prefer, such as Yarn):
    - `npm init --yes && npm pkg set type="module"`
        - This creates our package.json and sets the type to module allowing us to use ES6 imports and top level await functions
3. Install dependencies
    - Applications that run Apollo Server require two top-level dependencies
        - graphql & @apolloserver
        - run `npm install @apollo/server graphql`
4. Define our GraphQL schema
    - Create an index.js file
    - View index.js in directory: 3-Making_a_GraphQL_Server

### Additional Notes
- The Apollo server takes in an object as an argument
    - That object expects two properties
        - **typeDefs:** descriptions of our data types and the relationship they have with other data types
        - **resolvers:** functions that determine how we respond to queries for different data on the graph 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Schema_and_Types"></a>
## 4. Schema and Types - [video](https://www.youtube.com/watch?v=ginCmJEdZ0g&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=4)
- What are **typedefs**?
    - Definitions of the different types of data we want to expose on our graph
        - Example: A game type might have a price, a title, a platform etc...
- What is a **schema**?
    - The combination of all of the different types, their relationship to other types, and the kind of queries that can be made
    - Something that describes the shape of the graph and the data availbale on it
    - Normally your GraphQL schema, the data that's available on the graph, will be fairly similar to the data you're storing on your application database
- There are five basic scalar types built into GraphQL
    - int, float, string, boolean, and ID
        - GraphQL uses the ID type as a key for data objects
- Use `#graphql additional_code` to enable graphql syntax highlighting
```
export const typeDefs = `#graphql
    type Query {
        reviews: [Reviews]
        games: [Game]
        authors: [Author]
    }
`
```
- Defining data types
    - Add an exclamation point to make a field required. Otherwise it's allowed to be *NULL*
```
type Game {
        id: ID!
        title: String!
        platform: [String!]!

    }
```
- The exclamtion point inside the `[String!]!` signifies that the elements of the array can't be null
- The one on the outside signifies that the array itself must be an array and can't be null

- **Query** type
    - Every GraphQL schema must have a query type
    - It defines the entry points to the graph and specify the return types of those entry points
    ```
    type Query {
        reviews: [Reviews]
    }
    ```
    - The above code specifies that a you can query the graph with 'reviews' to get an array/list of reviews
        - But that is the only entry point to the graph
        - You can get other data through relations but not directly
    - We can gatekeep data in this way
- You can think of the schema and the typDefs as a map for Apollo to structure the graph
    - But they dont actually handle any queries
    - Then we set up Resolver function to actually handle the queries

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Resolver_Functions"></a>
## 5. Resolver Functions - [video](https://www.youtube.com/watch?v=mjqfYgFyziU&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=5)
- In our index.js we can create a variable that will store all of our resolver functions
- We must name them exactly as they are in the schema
- Apollo handles all the specific data separation
    - All we have to do is make sure the function is returning the proper data sets
- In order for this all to work we need to pass in the typeDefs and resolvers variable to the ApolloServer()
```
const server = new ApolloServer({
    typeDefs,
    resolvers
})
```
- When you run your server and visit **localhost:port_number** the Apollo Server and GUI will be running there automatically.

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Query_Variables"></a>
## 6. Query Variables - [video](https://www.youtube.com/watch?v=joMO4LwRa5Q&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=6)
- In the previous query we were only able to query for all the Reviews, Games or Authors
```
type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
```
- We can add a query for an individual review as follows: `review(id: ID!): Review`
    - 'id' - the name of the variable we include in the query to get a specific review
    - 'ID!' - the type of the variable and it is required to be such because of the '!'
- Resolver functions can take in three arguments
    - `resolver_function(parent, args, context)`
        - Parent - the parent resolver function in the hierarchy
            - In this example we've replaced parent with '_' because we won't be using it just yet
        - Args - Any query variable sent with the query
        - Context(optional) - Used for spying context variables across all of our resolvers, auth info etc...
            - We've left this parameter out because we aren't using it in this example
- We add the following to our index.js to our resolvers variable in the query
```
review(_, args) {
    return db.reviews.find((review) => review.id === args.id)
},
```
- The above example looks through our reviews array, finds a review where the id matches the passed in args' id and return it

- You can use variables to pass into the query to receive specific information
![example of querying on Apollo 1](/images/1_query_example.PNG)


[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Related_Data"></a>
## 7. Related Data - [video](https://www.youtube.com/watch?v=2oy0Uw5jUxc&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=7)
- In this sections we're linking data so that you can...
    - Reviews based on a game
    - Authors based on reviews
    - Games based on reviews
    - Reviews based on authors
- Rather than adding new resolver functions to our Query object we'll create new objects inside the resolver object for Game, Review, and Author
```
Game: {
    reviews(parent) {
        return db.reviews.filter((review) => review.game_id === parent.id)
    }
}
```
- In the above example, which we've added below the Query object in index.js, we're looking through reviews for ones whose game id matches the id of a particular game

- We can use variables for very specific queries
![example of querying on Apollo 2](/images/2_query_example.PNG)
- Or we can remove the variables and query for more broad data
![example of querying on Apollo 3](/images/3_query_example.PNG)
- Because of the way our reviews are chained we can continually nest querires inside one another
![example of querying on Apollo 4](/images/4_query_example.PNG)



[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Mutations"></a>
## 8. Mutations - [video](https://www.youtube.com/watch?v=MnDbZK6B8uE&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=8)
- A mutation is a generic term in GraphQL for any kind of change we can make to the data
    - Adding, deleting, etc...
- To define mutations we add a mutations type to our schema: `type Mutation {}`
- An example mutation would be to delete a game
```
type Mutation {
    deleteGame(id: ID!): [Game]
}
```
- In this example we pass in an id so we know which game to delete and return a list of games with the intent to return the remaining games
    - So we name the function, specify an object to act on, and the return type. `functionName(varName: varType): returnType`
- Next we'd add a resolver function for our mutation in a mutation object alongside our other resolver objects
```
const resolvers = {
    Query: {
        // Resolvers
    },
    Game: {
        // Resolvers
    },
    Author: {
        // Resolvers
    },
    Review: {
        // Resolvers
    },
    Mutation: {
        deleteGame()
    }
}
```
- Here is our example function to delete a game
```
deleteGame(_, args) {
    db.games = db.games.filter((game) => game.id !== args.id)
    return db.games
}
```
- In this case we don't use the parent argument, but we do use the args to get the id
- we set the value of db.games to db.games after the game with the matching id is filtered out
- Then we return the new list of games
#### Getting games before running deleteGame()
![example of querying on Apollo 5](/images/5_query_example.PNG)
#### Running the deleteGame() mutation
![example of querying on Apollo 6](/images/6_query_example.PNG)
#### Getting games after running deleteGame()
![example of querying on Apollo 7](/images/7_query_example.PNG)
- To create a schema to add data we can create an input object to pass in multiple arguments
```
type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
}
input AddGameInput {
    title: String!,
    platform: [String!]!
}
```
- Then we create our addGame() resolver function
```
addGame(_, args) {
    let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString() // Usually we'd generate a GUID or something similar here instead of a random number
    }
    db.games.push(game)
    return game
}
```
- We create a variable to store our game object `let game = {...}`
- Set it's values to those passed in by the args `...args.game`
- Generate an id
- Push the game object to the database
- Return the new game object
#### Getting games before running addGame()
![example of querying on Apollo 8](/images/8_query_example.PNG)
#### Running the addGame() mutation
![example of querying on Apollo 9](/images/9_query_example.PNG)
#### Getting games after running addGame()
![example of querying on Apollo 10](/images/10_query_example.PNG)

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Update_Mutations"></a>
## 9. Update Mutations - [video](https://www.youtube.com/watch?v=2wWNslOgfhU&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=9)
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Useful_Commands"></a>
## Useful Commands

### Setup
- `npm init --yes && npm pkg set type="module"`
    - Creates the package.json and sets the type to module allowing ES6 imports
- `npm install @apollo/server graphql`
    - Installs the necessary dependencies to run an Apollo server

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Other"></a>
## Other

### Extensions
- GraphQL: Syntax Highlighting - GraphQL Foundation
    - Adds syntax highlighting support for .graphql & embedded support for javascript, typescript, vue, markdown, python, php, reason, ocaml and rescript...


[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)