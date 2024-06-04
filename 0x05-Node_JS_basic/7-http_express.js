const express = require('express');
const countStudents = require('./3-read_file_async');

// Create the Express app
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for /students
app.get('/students', (req, res) => {
  const database = process.argv[2];

  countStudents(database)
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch(() => {
      res.status(500).send('Not Found');
    });
});

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
