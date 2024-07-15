// 果物 (Fruit) (31606)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const apple = Number(input[0]);
const orange = Number(input[1]);
const banana = 3;

console.log(apple + orange + banana);
