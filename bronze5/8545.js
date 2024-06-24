// Zadanie próbne (8545)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

console.log(word.split('').reverse().join(''));
