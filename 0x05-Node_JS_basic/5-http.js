const http = require('http');
const countStudents = require('./3-read_file_async');

function homeHandeler(req, res) {
  res.end('Hello Holberton School!');
}

function studentsHandeler(req, res) {
  countStudents(process.argv[2])
    .then(({ fields, NumberOfStudents }) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${NumberOfStudents}\n`);
      let cnt = 0;
      for (const [field, students] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        if (cnt !== Object.keys(fields).length - 1) res.write('\n');
        cnt += 1;
      }
      res.end();
    })
    .catch(() => {
      res.end('This is the list of our students');
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
