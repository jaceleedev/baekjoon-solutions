// 사장님 도박은 재미로 하셔야 합니다 (23795)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input.length;
let sum = 0;

for (let i = 0; i < length - 1; ++i) {
  sum += Number(input[i]);
}

console.log(sum);
