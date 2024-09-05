// Easy-to-Solve Expressions (25784)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (a === b + c || b === a + c || c === a + b) {
  console.log(1);
} else if (a === b * c || b === a * c || c === a * b) {
  console.log(2);
} else {
  console.log(3);
}
