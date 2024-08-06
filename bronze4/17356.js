// 욱 제 (17356)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

const m = (b - a) / 400;

const answer = 1 / (1 + Math.pow(10, m));

console.log(answer);
