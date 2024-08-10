// 3 つの整数 (Three Integers) (18408)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const array = input[0].split(' ').map(Number);
const one = array.filter((num) => num === 1).length;
const two = array.filter((num) => num === 2).length;

console.log(one > two ? 1 : 2);
