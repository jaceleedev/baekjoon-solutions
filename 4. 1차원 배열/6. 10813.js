function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const answer = new Array(n).fill().map((_, index) => index + 1);

for (let a = 0; a < m; ++a) {
  const [i, j] = input[a + 1].split(' ').map(Number);

  swap(answer, i - 1, j - 1);
}

console.log(answer.join(' '));
