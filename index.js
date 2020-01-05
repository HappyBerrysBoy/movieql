var GraphQLServer = require("graphql-yoga").GraphQLServer;
// import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
var datas = [
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
var typeDefs = "\n  type Data {\n    id:Int!\n    name:String!\n    data:String!\n  }\n\n  type Query {\n    hello(id:Int, name:String, data:String): [Data]!\n    test:String!\n  }\n";
var resolvers = {
    Query: {
        hello: function (_, _a) {
            var id = _a.id, name = _a.name;
            console.log(id, name);
            return datas.filter(function (data) { return data.id === id; });
        },
        test: function () { return "test!!"; }
    }
};
var server = new GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
server.start(function () { return console.log("Server is running on localhost:4000"); });
