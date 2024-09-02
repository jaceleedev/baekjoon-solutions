// MBTI (25640)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const jinho = input[0];
const n = Number(input[1]);

let count = 0;

for (let i = 2; i <= n + 1; ++i) {
  const mbti = input[i];

  if (mbti === jinho) {
    ++count;
  }
}

console.log(count);
