// Silnia (8558)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

if (n === 0 || n === 1) {
  console.log(1);
} else if (n === 2) {
  console.log(2);
} else if (n === 3) {
  console.log(6);
} else if (n === 4) {
  console.log(4);
} else {
  console.log(0);
}
