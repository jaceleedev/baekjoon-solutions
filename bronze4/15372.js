// A Simple Problem. (15372)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
const answer = [];

for (let i = 1; i <= t; ++i) {
  const n = Number(input[i]);

  answer.push(n ** 2);
}

console.log(answer.join('\n'));
