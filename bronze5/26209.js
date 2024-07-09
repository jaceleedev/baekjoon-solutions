// Intercepting Information (26209)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = input[0].split(' ').join(' ');

const failure = n.includes('9');

console.log(failure ? 'F' : 'S');
