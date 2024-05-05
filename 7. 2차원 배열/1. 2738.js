const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arrayOne = [];
const arrayTwo = [];
let inputIndex = 1;

for (let i = 0; i < n; ++i) {
  const rowOne = input[inputIndex].split(' ').map(Number);
  const rowTwo = input[inputIndex + n].split(' ').map(Number);
  arrayOne.push(rowOne);
  arrayTwo.push(rowTwo);
  ++inputIndex;
}

const answer = Array.from({ length: n }, () => Array(m).fill(0));
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < m; ++j) {
    answer[i][j] = arrayOne[i][j] + arrayTwo[i][j];
  }
}

console.log(answer.map((row) => row.join(' ')).join('\n'));
