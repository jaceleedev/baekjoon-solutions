// 鉛筆 (Pencils) (15474)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, a, b, c, d] = input[0].split(' ').map(Number);

const aSet = Math.ceil(n / a);
const cSet = Math.ceil(n / c);

const costA = aSet * b;
const costB = cSet * d;

console.log(Math.min(costA, costB));
