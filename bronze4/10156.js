// 과자 (10156)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [k, n, m] = input[0].split(' ').map(Number);
const money = k * n - m;

console.log(money <= 0 ? 0 : money);
