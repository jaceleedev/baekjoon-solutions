// Judging Moose (15025)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [l, r] = input[0].split(' ').map(Number);

if (l === 0 && r === 0) {
  console.log(`Not a moose`);
} else if (l === r) {
  console.log(`Even ${l + r}`);
} else {
  const max = Math.max(l, r);

  console.log(`Odd ${max * 2}`);
}
