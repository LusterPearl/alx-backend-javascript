const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');
const { config } = require('../webpack.config');

// Define the port to listen on
const port = 1245;

// Create the server
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    // Respond with hello holberton school
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    // respond with the list of student
    const database = process.argv[2];

    countStudents(database)
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
