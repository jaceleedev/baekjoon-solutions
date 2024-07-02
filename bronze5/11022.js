// A+B - 8 (11022)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; ++i) {
  const [a, b] = input[i].split(' ').map(Number);

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
