// Комната (27245)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const w = Number(input[0]);
const l = Number(input[1]);
const h = Number(input[2]);

const minSide = Math.min(w, l);
const maxSide = Math.max(w, l);

if (minSide / h < 2) {
  console.log('bad');
} else if (maxSide / minSide > 2) {
  console.log('bad');
} else {
  console.log('good');
}
