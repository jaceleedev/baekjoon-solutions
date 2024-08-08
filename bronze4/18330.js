// Petrol (18330)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

if (n <= k + 60) {
  console.log(n * 1500);
} else {
  console.log((k + 60) * 1500 + (n - k - 60) * 3000);
}
