// Buying in Bulk (26332)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [c, p] = input[i].split(' ').map(Number);
  const total = p + (c - 1) * (p - 2);

  console.log(`${c} ${p}`);
  console.log(`${total}`);
}
