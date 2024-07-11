// Metronome (27389)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

console.log((n / 4).toFixed(2));
