# GraphQL
[Introductory GraphQL tutorial](https://www.youtube.com/watch?v=xMCnDesBggM&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&t=11s)

## Sections
<a name="Sections"></a>
1. [What is GraphQL?](#What_is_GraphQL)
2. [Query Basics](#Query_Basics)
3. [Making a GraphQL Server](#Making_a_GraphQL_Server)
4. [Schema and Types](#Schema_and_Types)

[Useful Commands](#Useful_Commands)

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
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)