// N 찍기 (2741)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let answer = '';

for (let i = 1; i <= n; ++i) {
  answer += `${i}\n`;
}

console.log(answer);
