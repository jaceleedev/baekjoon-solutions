// Contest Timing (5928)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [d, h, m] = input[0].split(' ').map(Number);

const startTotal = 11 * 24 * 60 + 11 * 60 + 11;
const endTotal = d * 24 * 60 + h * 60 + m;
const spentTotal = endTotal - startTotal;

console.log(spentTotal < 0 ? -1 : spentTotal);
