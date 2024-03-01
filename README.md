# GraphQL
[Introductory GraphQL tutorial](https://www.youtube.com/watch?v=xMCnDesBggM&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&t=11s)

## Sections
<a name="Sections"></a>
1. [What is GraphQL?](#What_is_GraphQL)
2. [Query Basics](#Query_Basics)

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
GraphQL gives us more flexibility and control about how we make requests and what data we want to fetch or mutate.
- GraphQL prevents over fetching and under fetching

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
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Useful_Commands"></a>
## Useful Commands

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)