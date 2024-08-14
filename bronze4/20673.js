// Covid-19 (20673)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const p = Number(input[0]);
const q = Number(input[1]);

if (p <= 50 && q <= 10) {
  console.log('White');
} else if (q > 30) {
  console.log('Red');
} else {
  console.log('Yellow');
}
