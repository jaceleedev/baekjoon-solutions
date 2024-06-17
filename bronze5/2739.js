// 구구단 (2739)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let answer = '';

for (let i = 1; i <= 9; ++i) {
  answer += `${n} * ${i} = ${n * i}\n`;
}

console.log(answer);
