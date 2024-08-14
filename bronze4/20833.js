// Kuber (20833)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let answer = 0;
for (let i = 1; i <= n; ++i) {
  answer += Math.pow(i, 3);
}

console.log(answer);
