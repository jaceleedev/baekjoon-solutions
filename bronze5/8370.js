// Plane (8370)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n1, k1, n2, k2] = input[0].split(' ').map(Number);

const seats = n1 * k1 + n2 * k2;

console.log(seats);
