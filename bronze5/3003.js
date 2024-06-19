// 킹, 퀸, 룩, 비숍, 나이트, 폰 (3003)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const pieces = input[0].split(' ').map(Number);
const correctPieces = [1, 1, 2, 2, 2, 8];
const diffs = [];

for (let i = 0; i < correctPieces.length; ++i) {
  diffs.push(correctPieces[i] - pieces[i]);
}

console.log(diffs.join(' '));
