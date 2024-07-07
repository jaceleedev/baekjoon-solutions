// The Fastest Sorting Algorithm In The World (23235)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input.length;

for (let i = 0; i < length - 1; ++i) {
  console.log(`Case ${i + 1}: Sorting... done!`);
}
