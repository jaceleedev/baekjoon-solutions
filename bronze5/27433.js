// 팩토리얼 2 (27433)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let result = 1;

for (let i = 2; i <= n; ++i) {
  result *= i;
}

console.log(result);
