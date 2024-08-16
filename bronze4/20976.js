// 2 番目に大きい整数 (The Second Largest Integer) (20976)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[0].split(' ').map(Number);
numbers.sort((a, b) => a - b);

console.log(numbers[1]);
