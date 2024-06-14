// 별 찍기 - 1 (2438)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let answer = '';

for (let i = 1; i <= n; ++i) {
  const stars = '*'.repeat(i);
  answer += stars + '\n';
}

console.log(answer);
