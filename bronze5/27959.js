// 초코바 (27959)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const canBuyChocolateBar = n * 100 >= m;

console.log(canBuyChocolateBar ? 'Yes' : 'No');
