// Shares (3733)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input.length;
let answer = '';

for (let i = 0; i < length; ++i) {
  const [n, s] = input[i].split(' ').map(Number);
  const x = Math.trunc(s / (n + 1));
  answer += `${x}\n`;
}

console.log(answer);
