const { GraphQLServer } = require("graphql-yoga");

// import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const datas = [
  {
    id: 0,
    name: "namename",
    data: "datadata"
  },
  {
    id: 1,
    name: "kakakak",
    data: "kokokoko"
  }
];

const typeDefs = `
  type Data {
    id:Int!
    name:String!
    data:String!
  }

  type Query {
    hello(id:Int, name:String, data:String): [Data]!
    test:String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { id, name }) => {
      console.log(id, name);
      return datas.filter(data => data.id === id);
    },
    test: () => "test!!"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
