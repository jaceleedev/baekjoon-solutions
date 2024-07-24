// 10부제 (10797)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const day = Number(input[0]);
const carNumbers = input[1].split(' ').map(Number);

console.log(carNumbers.filter((carNumber) => carNumber === day).length);
