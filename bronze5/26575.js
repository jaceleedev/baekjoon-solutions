// Pups (26575)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [d, f, p] = input[i].split(' ').map(Number);

  const total = (d * f * p).toFixed(2);

  console.log(`$${total}`);
}
