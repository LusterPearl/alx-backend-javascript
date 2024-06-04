const http = require('http');
const countStudents = require('./3-read_file_async');
const url = require('url');

// Define the port to listen on
const port = 1245;

// Create the server
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    // Respond with "Hello Holberton School!" for the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    // Respond with the list of students for the "/students" path
    const database = process.argv[2];

    countStudents(database)
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    // Handle other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
