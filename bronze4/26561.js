// Population (26561)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [p, t] = input[i].split(' ').map(Number);

  const dead = Math.floor(t / 7);
  const born = Math.floor(t / 4);

  console.log(p - dead + born);
}
