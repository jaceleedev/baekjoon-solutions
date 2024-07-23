// RICE SACK (9699)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const sacks = input[i].split(' ').map(Number);
  sacks.sort((a, b) => b - a);

  console.log(`Case #${i}: ${sacks[0]}`);
}
