// Zero or One (13623)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (a === b && b === c) {
  console.log('*');
} else if (a === b) {
  console.log('C');
} else if (b === c) {
  console.log('A');
} else if (c === a) {
  console.log('B');
}
