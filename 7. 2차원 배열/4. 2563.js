function colorPaper(board, x, y) {
  let area = 0;

  for (let i = x; i < x + 10; ++i) {
    for (let j = y; j < y + 10; ++j) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        ++area;
      }
    }
  }

  return area;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const board = Array.from({ length: 100 }, () => Array(100).fill(0));

let answer = 0;
for (let i = 1; i <= n; ++i) {
  const [x, y] = input[i].split(' ').map(Number);
  const area = colorPaper(board, x, y);
  answer += area;
}

console.log(answer);
