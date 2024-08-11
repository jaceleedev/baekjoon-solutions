// The Walking Adam (18698)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; ++i) {
  const firstD = input[i].indexOf('D');

  console.log(firstD !== -1 ? firstD : input[i].length);
}
