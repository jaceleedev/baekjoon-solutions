// 특식 배부 (27110)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);

let total = 0;

total += Math.min(n, a);
total += Math.min(n, b);
total += Math.min(n, c);

console.log(total);
