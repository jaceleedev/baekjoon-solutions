// Rectangles (15232)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const r = Number(input[0]);
const c = Number(input[1]);

for (let row = 0; row < r; ++row) {
  console.log('*'.repeat(c));
}
