const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const pieces = input[0].split(' ').map(Number);
const correctPieces = [1, 1, 2, 2, 2, 8];

const answer = pieces
  .map((piece, index) => correctPieces[index] - piece)
  .join(' ');

console.log(answer);
