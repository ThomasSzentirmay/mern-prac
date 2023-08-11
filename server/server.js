const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');

const express = require('express');
const http = require('http');
const cors = require('cors');

const db = require('./db/connection');

const { typeDefs, resolvers } = require('./schema');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 3333;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  app.use(express.json());
  app.use(cors());
  app.use(expressMiddleware(server, {
    context: async (apollo_request_data) => {
      // req.cookies.token
      // res.cookie('token', token, {httpOnly: true})
      return {
        req: apollo_request_data.req,
        res: apollo_request_data.res
      }
    }
  }));

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
}

db.once('open', () => {
  startServer()
    .then(() => {
      console.log('Express server started on port %s', PORT);
      console.log('GraphQL ready on localhost:%s/graphql', PORT);
    });
})