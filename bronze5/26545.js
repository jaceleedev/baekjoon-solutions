// Mathematics (26545)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let sum = 0;

for (let i = 1; i <= n; ++i) {
  const number = Number(input[i]);
  sum += number;
}

console.log(sum);
