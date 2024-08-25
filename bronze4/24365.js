// ПЧЕЛИЧКАТА МАЯ (24365)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const moveFromRight = c - b;
const moveFromMid = b - a;

const answer = moveFromRight + moveFromMid;

console.log(answer);
