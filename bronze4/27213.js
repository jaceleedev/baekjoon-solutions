// Граничные клетки (27213)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const m = Number(input[0]);
const n = Number(input[1]);

if (m === 1) {
  console.log(n);
} else if (n === 1) {
  console.log(m);
} else {
  console.log(2 * n + 2 * (m - 2));
}
