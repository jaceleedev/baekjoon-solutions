// 문자열 (9086)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let answer = '';

for (let i = 1; i <= t; ++i) {
  const word = input[i];
  const first = word[0];
  const last = word[word.length - 1];

  answer += `${first}${last}\n`;
}

console.log(answer);
