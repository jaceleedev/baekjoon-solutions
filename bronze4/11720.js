// 숫자의 합 (11720)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const numbers = input[1].split('').map(Number);

const sum = numbers.reduce((acc, curr) => acc + curr);

console.log(sum);
