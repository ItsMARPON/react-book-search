const {gql} = require('apollo-server-express');

const typeDefs = 'gql'`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book{
        bookId: String!
        authors: String
        description: String!
        title: String!
        image: String
        link: String
    }
    type Query{
        me: User
    }
    type Mutation{
        
    }
`;

module.exports = typeDefs;