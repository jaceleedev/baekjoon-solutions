// Site Score (20254)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [ur, tr, u0, t0] = input[0].split(' ').map(Number);

console.log(56 * ur + 24 * tr + 14 * u0 + 6 * t0);
