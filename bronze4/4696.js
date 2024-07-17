// St. Ives (4696)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const n = Number(input[i]);
  let total = 0;

  for (let j = 0; j < 5; ++j) {
    total += Math.pow(n, j);
  }

  console.log(total.toFixed(2));
}
