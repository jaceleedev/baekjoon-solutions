// Do Not Touch Anything (13136)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [r, c, n] = input[0].split(' ').map(Number);

console.log(Math.ceil(r / n) * Math.ceil(c / n));
