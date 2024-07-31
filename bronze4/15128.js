// Congruent Numbers (15128)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [p1, q1, p2, q2] = input[0].split(' ').map(Number);
const numerator = p1 * p2;
const denominator = q1 * q2 * 2;

if (numerator % denominator === 0) {
  console.log(1);
} else {
  console.log(0);
}
