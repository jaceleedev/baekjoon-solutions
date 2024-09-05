// Corona Virus Testing (25828)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [g, p, t] = input[0].split(' ').map(Number);

const testOne = g * p;
const testTwo = g + p * t;

if (testOne < testTwo) {
  console.log(1);
} else if (testOne > testTwo) {
  console.log(2);
} else {
  console.log(0);
}
