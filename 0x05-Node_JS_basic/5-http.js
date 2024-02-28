const http = require('http');
const countStudents = require('./3-read_file_async');

function homeHandeler(req, res) {
  res.end('Hello Holberton School!');
}

function studentsHandeler(req, res) {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((result) => {
      console.log(result);
      res.write(result.join('\n'));
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
}

const port = 1245;
const host = 'localhost';
const routes = {
  '/': homeHandeler,
  '/students': studentsHandeler,
};

const app = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;
  if (routes[url]) routes[url](req, res);
};

const server = http.createServer(app);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
