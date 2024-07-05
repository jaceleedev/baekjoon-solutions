// 1998년생인 내가 태국에서는 2541년생?! (18108)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const buddhistYear = Number(input[0]);
const diff = 2541 - 1998;

console.log(buddhistYear - diff);
