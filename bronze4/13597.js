// Tri-du (13597)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

if (a >= b) {
  console.log(a);
} else {
  console.log(b);
}
