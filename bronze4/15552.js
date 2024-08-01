// 빠른 A+B (15552)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let result = '';

for (let i = 1; i <= t; ++i) {
  const [a, b] = input[i].split(' ').map(Number);
  result += `${a + b}\n`;
}

console.log(result);
