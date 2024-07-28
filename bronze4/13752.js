// 히스토그램 (13752)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; ++i) {
  console.log('='.repeat(Number(input[i])));
}
