// 세수정렬 (2752)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[0].split(' ').map(Number);
numbers.sort((a, b) => a - b);

console.log(numbers.join(' '));
