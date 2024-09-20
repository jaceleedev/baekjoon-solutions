// Reverse (26546)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let k = 1; k <= n; ++k) {
  const [word, i, j] = input[k].split(' ');
  const start = Number(i);
  const end = Number(j);

  const result = word.slice(0, start) + word.slice(end);

  console.log(result);
}
