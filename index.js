const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // Use graphqlHTTP from the express-graphql package
const schema = require('./schema'); // Import your GraphQL schema
const db = require('./db'); // Import your MongoDB connection

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable the GraphiQL interface for testing
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
