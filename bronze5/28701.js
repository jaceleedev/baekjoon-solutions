// 세제곱의 합 (28701)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const sum = (n * (n + 1)) / 2;
const squareOfSum = sum ** 2;
const sumOfCubes = squareOfSum;

console.log(sum);
console.log(squareOfSum);
console.log(sumOfCubes);
