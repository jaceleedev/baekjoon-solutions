const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let answer = '';
for (let i = 1; i <= n; ++i) {
  answer += `${' '.repeat(n - i)}${'*'.repeat(2 * i - 1)}\n`;
}
for (let i = n - 1; i >= 1; --i) {
  answer += `${' '.repeat(n - i)}${'*'.repeat(2 * i - 1)}\n`;
}

console.log(answer);
