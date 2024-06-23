// Pyramids (5341)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (let i = 0; i < input.length - 1; ++i) {
  const size = Number(input[i]);
  const blocks = (size * (size + 1)) / 2;

  answer += `${blocks}\n`;
}

console.log(answer);
