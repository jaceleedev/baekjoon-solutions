// Circus (20352)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);

const r = Math.sqrt(a / Math.PI);

console.log(2 * Math.PI * r);
