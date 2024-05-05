const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const board = [];

for (let i = 0; i < 9; ++i) {
  const row = input[i].split(' ').map(Number);
  board.push(row);
}

let maxRowIndex = 0;
let maxColIndex = 0;
let maxValue = board[maxRowIndex][maxColIndex];

for (let i = 0; i < 9; ++i) {
  for (let j = 0; j < 9; ++j) {
    const value = board[i][j];

    if (value > maxValue) {
      maxValue = value;
      maxRowIndex = i;
      maxColIndex = j;
    }
  }
}

console.log(`${maxValue}\n${maxRowIndex + 1} ${maxColIndex + 1}`);
