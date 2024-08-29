// 단순한 문제 (Small) (25494)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

for (let i = 1; i <= t; ++i) {
  const [a, b, c] = input[i].split(' ').map(Number);
  const min = Math.min(a, b, c);

  console.log(min);
}
