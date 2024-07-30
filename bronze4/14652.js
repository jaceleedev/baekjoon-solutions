// 나는 행복합니다~ (14652)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

const seatNumber = [Math.floor(k / m), k % m];

console.log(seatNumber.join(' '));
