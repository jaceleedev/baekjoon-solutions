const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const studentBoard = new Array(30).fill(0);

for (const studentNum of input) {
  studentBoard[studentNum - 1] = 1;
}

studentBoard.forEach((num, index) => {
  if (num === 0) {
    console.log(index + 1);
  }
});
