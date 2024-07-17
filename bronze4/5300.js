// Fill the Rowboats! (5300)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const counts = [];

for (let i = 1; i <= n; ++i) {
  counts.push(i);

  if (i % 6 === 0 || i === n) {
    counts.push('Go!');
  }
}

console.log(counts.join(' '));
