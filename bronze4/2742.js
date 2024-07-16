// 기찍 N (2742)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let answer = '';

for (let i = n; i >= 1; --i) {
  answer += `${i}\n`;
}

console.log(answer);
