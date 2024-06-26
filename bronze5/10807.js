// 개수 세기 (10807)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nums = input[1].split(' ').map(Number);
const v = Number(input[2]);

const answer = nums.filter((num) => num === v).length;

console.log(answer);
