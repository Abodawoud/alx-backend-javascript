#!/usr/bin/node
console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (INPUT) => {
  process.stdout.write(`Your name is: ${INPUT}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
