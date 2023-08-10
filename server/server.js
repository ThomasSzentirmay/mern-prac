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
}

// import typeDefs and resolvers

app.use(express.json());

// Setup our Apollo GraphQL server

app.listen(PORT, () => console.log('Server started on port %s', PORT));