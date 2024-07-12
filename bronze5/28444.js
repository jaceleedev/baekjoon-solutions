// HI-ARC=? (28444)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [h, i, a, r, c] = input[0].split(' ').map(Number);

console.log(h * i - a * r * c);
