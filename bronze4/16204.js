// 카드 뽑기 (16204)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

const Os = Math.min(m, k);
const Xs = Math.min(n - m, n - k);

console.log(Os + Xs);
