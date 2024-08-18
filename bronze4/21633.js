// Bank Transfer (21633)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const k = Number(input[0]);

const fee = 25 + k * 0.01;

if (fee < 100) {
  console.log(100);
} else if (fee > 2000) {
  console.log(2000);
} else {
  console.log(fee.toFixed(2));
}
