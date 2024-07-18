// 입실 관리 (5524)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const name = input[i];

  console.log(name.toLowerCase());
}
