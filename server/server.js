const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');

const express = require('express');
const http = require('http');
const cors = require('cors');

const { typeDefs, resolvers } = require('./schema');

const express = require('express');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 3333;

async function startServer() {
    const server = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      });
      // Ensure we wait for our server to start
      await server.start();

      app.use(express.json());
      app.use(cors());
      app.use(expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      }));

      await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
}

// import typeDefs and resolvers



// Setup our Apollo GraphQL server

app.listen(PORT, () => console.log('Server started on port %s', PORT));