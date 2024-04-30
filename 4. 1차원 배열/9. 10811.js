const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const answer = new Array(n).fill().map((_, index) => index + 1);

for (let k = 1; k <= m; ++k) {
  const [i, j] = input[k].split(' ').map(Number);
  const reversed = answer.slice(i - 1, j).reverse();

  answer.splice(i - 1, reversed.length, ...reversed);
}

console.log(answer.join(' '));
