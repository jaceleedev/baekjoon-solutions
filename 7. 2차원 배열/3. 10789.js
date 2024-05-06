const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const maxLength = Math.max(...input.map((word) => word.length));
let answer = '';

for (let col = 0; col < maxLength; ++col) {
  for (let row = 0; row < 5; ++row) {
    const ch = input[row][col];

    if (ch) {
      answer += ch;
    }
  }
}

console.log(answer);
