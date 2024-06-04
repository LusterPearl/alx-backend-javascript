// using express for nodejs
const express = require('express');
const { module } = require('../webpack.config');

// Create the Express app
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
