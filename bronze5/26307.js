// Correct (26307)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [hh, mm] = input[0].split(' ').map(Number);

console.log((hh - 9) * 60 + mm);
