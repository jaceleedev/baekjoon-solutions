// X보다 작은 수 (10871)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, x] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const answer = nums.filter((num) => num < x).join(' ');

console.log(answer);
