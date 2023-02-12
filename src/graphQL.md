What is GraphQl ?
 - A new API standard that was invented and open sourced by facebook
 - exposes declarative way of data fetching.
 - It exposes a single endposint and responds to the queries.

 How does it works ?

 Client sends request to server.
 Server reads the request and send back the required information

 Comparing with REST: REST API's are good but not suitable for the current application because of

 - Increased mobile usage, it creates need for efficient data loading.
 - Variety of different frontend frameworks and platforms on client side.
 - Fast development speed & expectation for rapid feature development.

 History of GraphQL
 - FB stated in 2012 in their native mobile apps. they open sourced it in 2015.
 - GraphQL is a technology not only can be used with react but it can be used where ever client can interact with server for data fetching. -- Important.

 Why GraphQl over RESTFUL API ?
 Great Feauters: 
    - Stateless server and Strucutred access to resources
    - Rest is strict specification
    - With rapid changing requirements on client side, don't go well with static nature of the rest API -- Important

GraphQL - developed for more flexibility and efficiency in client server communication

Example: A blogging application that show case the blogs of each person and the list of blogs he posted and the three follower whom he is following.
So for designing the above scenario we need three different end points
    EndPoint 1: /users/<id>
    EndPoint 2: /users/<id>/posts
    EndPoint 3: /users/<id>/followers

Based on the API request the server responds and sends the data to the client. Most of the time we send additional
data, that is not required to the client when we hit the respective API. Additional data that is not used on the client side.

How will you solve the problem with GraphQl ?
- With GraphQl you will have only single API
- We will send a POST request to the server and include the query of data we require from the server
- So we get only the information that is required by the client and use that to render it on the screen.

High level differences between GraphQL and Rest API. --- Important
- Elimiate the problem of over and under fetching. As it will be costing the client(his data plan is effected)
- Number of requests can be minimized. ( as we have dedicated endpoint for each task)
- Although we can design the REST API according to the Client View structure, but it impacts the rapid developemnt.
With change in requirements we got to adjust API and change the design. In case of GraphQL no need to have this change because of it's flexibility nature of it. Resolvers on the server side are flexible enough to adapt to this change.
- Provide some addition insights like the unused API's, frequently used data by the client and performance stats
about the API.
- It Types system: GraphQL uses a strong type system  to define capabilities of an API
    - This schema serves as a contract between client and server
    - Frontend and Backend teams can start working individual.

What are the Core concepts of graphQl ?
- GraphQL has its own type system for describing the Schema Defination Lanaguage(SDL) of API.
- Defining Simple types: 
```js
    type Person {
        name: String!,  // Exclamator marks it is a required.
        age: Int!
    }

    type Post {
        title: String!
    }
```
- Adding a relation ship between the types:
```js
    type Person {
        name: String!,  // Exclamator marks it is a required.
        age: Int!,
        posts: [Post]! // Each person can have a one or many posts
    }

    // Each Post should have a author of the post and it is of type Person.
    type Post {
        title: String!,
        author: Person!
    }
```
- How can we fetch data from server using graphQL ?
    - By using `Query` -- Important
    - In case of REST API, the required information is embeded in the URL (Eg: /users/<id>/posts, we are looking for posts).
    - In case of GraphQL the required information is emebeded using a query, meaning client is responsible on
    deciding what information is required from the server.
    ```js
        // All persons query is used to retireve all the names of the persons from the server
        {
            allPersons { // root field of the query
                name // response required from the server
            }
        }
        // in case if the client want to retreive age as well then he can add the required porperty as below
        {
            allPersons {
                name,
                age
            }
        }
        // in case he want to get the last 2 persons names
        {
            allPersons(last:2) { // here last:2 is the argument for the query
                name,
                age
            }
        }
    ```
- How can we write data to the backend using graphQL? 
    - By using `Mutataions` and there are three kinds of mutations.
        - Creating new data
        - Updating existing data
        - Deleted existing data
    - Always `Mutations` should start with keyword `mutation`
    ```js
        mutation {
            createPerson(name: 'Sai', age:25) { //createPerson is called root field of the mutation and it is taking arguments like name and age
                name,
                age
            }
        }
    ```
    - Amending the type query based on the mutation
    ```js
        type Person {
            id: Int!,
            name: String!,
            age: Int!
        }

        // As we are asking the server to send the id once the data is created we need amend the
        // type information accordingly.
        muatation {
            createPerson(name: 'Sai', age:25) {
                id
            }
        }
    ```
- How to get updates from the server when ever any new data is inserted into a DB ?
    - By using `Subscription`
    - Subscription are nothing but a stream of data that is pushed from the server to the client.
    - Every time a new data is inserted we send the pay load that is deined in the subscription to the client.
        ```js
            subscription {
                newPerson {
                    name,
                    age
                }
            }
        ```
- What are the core concepts of graphQl ?
    - Query,
    - Mutation,
    - Subscription

- Waht is SDL (Schema defination language)? 
    - A schema is contract between client and the server
    - It is a collect of graphQL types with root types
    - Root types define the entry point for the API.
    ```js
    // Root types are nothing but Query, Mutation, Subscription
        type Query {

        }
        type Mutation {

        }
        type Subscription {

        }
    ```
    - Example of schema of our API
    ```js
        type Query {
            allPersons(last: Int): [Person!]!
            allPost(last: Int): [Post!]!
        }

        type Mutation {
            createPerson(name: String!, age: Int!): Person!
            updatePerson(id: ID!, name: String!, age: Int!): Person!
            deletePerson(id: ID!): Person!

            createPost(title: String!): Post!
            updatePost(id: ID!, title: String!): Post!
            deletePost(id: ID!): Post!
        }

        type Subscription {
            newPerson: Person!
            updatedPerson: Person!
            deletPerson: Person!

            newPost: Post!
            updatePost: Post!
            deletePost: Post!
        }
        type Person {
            id: ID!,
            name: String!,
            age: Int!,
            posts: [Post!]!
        }
        type Post {
            title: strin!,
            author: Person!
        }
    ```

    - How to develop GraphQl server ?
        - We can use any language for developing the graphQl server, all it requires is SDL(
            Schema Defination Language) which is an api for the server.
    
- GraphQlSchema object is the core of a GraphQl server
- GraphQl.js is FB reference implementation and provides foundation for other libraries
like graphql-tools and grahene.js
- EachField in a graphQl is backed by a resolver
        