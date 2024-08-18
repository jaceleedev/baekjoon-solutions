// Checkers (21631)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(BigInt);

if (a >= b) {
  console.log(b.toString());
} else if (a < b && b !== 0n) {
  console.log((a + 1n).toString());
}
