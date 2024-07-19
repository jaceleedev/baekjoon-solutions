// 상근이의 친구들 (5717)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const [m, f] = input[i].split(' ').map(Number);

  console.log(m + f);
}
