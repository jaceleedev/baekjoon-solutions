// Squares (6887)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const tiles = Number(input[0]);

const sideLength = Math.floor(Math.sqrt(tiles));

console.log(`The largest square has side length ${sideLength}.`);
