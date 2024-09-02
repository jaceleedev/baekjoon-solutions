// 햄버거 만들기 (25628)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

const min = Math.min(Math.floor(a / 2), b);

console.log(min);
