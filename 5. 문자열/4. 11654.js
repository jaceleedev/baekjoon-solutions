const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

console.log(word.charCodeAt(0));
