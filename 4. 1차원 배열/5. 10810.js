const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const answer = new Array(n).fill(0);

for (let a = 0; a < m; ++a) {
  const [i, j, k] = input[a + 1].split(' ').map(Number);

  for (let b = i; b <= j; ++b) {
    answer[b - 1] = k;
  }
}

console.log(answer.join(' '));
