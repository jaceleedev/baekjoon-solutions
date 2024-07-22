// Koszykarz (8710)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [k, w, m] = input[0].split(' ').map(Number);

const diff = w - k;

console.log(Math.ceil(diff / m));
