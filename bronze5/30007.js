// 라면 공식 (30007)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [a, b, x] = input[i].split(' ').map(Number);

  console.log(a * (x - 1) + b);
}
