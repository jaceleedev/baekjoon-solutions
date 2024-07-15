// Adding Trouble (31654)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

console.log(a + b === c ? 'correct!' : 'wrong!');
