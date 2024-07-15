// 별 찍기 - 2 (2439)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const blanks = ' '.repeat(n - i);
  const stars = '*'.repeat(i);

  console.log(`${blanks}${stars}`);
}
