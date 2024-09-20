// Simple Sum (26531)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const parts = input[0].split(' ');

const a = Number(parts[0]);
const b = Number(parts[2]);
const c = Number(parts[4]);

if (a + b === c) {
  console.log('YES');
} else {
  console.log('NO');
}
