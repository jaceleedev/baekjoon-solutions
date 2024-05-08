const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, b] = input[0].split(' ');

const answer = parseInt(n).toString(b).toUpperCase();

console.log(answer);
