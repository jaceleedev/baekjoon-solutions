// Lucky 7 (30224)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numStr = input[0];
const num = Number(numStr);
const containSeven = numStr.includes('7');
const isDivisibleBySeven = num % 7 === 0;

if (!containSeven && !isDivisibleBySeven) {
  console.log(0);
} else if (!containSeven && isDivisibleBySeven) {
  console.log(1);
} else if (containSeven && !isDivisibleBySeven) {
  console.log(2);
} else if (containSeven && isDivisibleBySeven) {
  console.log(3);
}
