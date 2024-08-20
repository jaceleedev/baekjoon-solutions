// SASA 모형을 만들어보자 (23825)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const s = Math.floor(n / 2);
const a = Math.floor(m / 2);

console.log(Math.min(s, a));
