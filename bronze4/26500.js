// Absolutely (26500)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [x, y] = input[i].split(' ').map(Number);

  console.log(Math.abs(x - y).toFixed(1));
}
