// Can you add this? (7891)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let answer = '';

for (let i = 1; i <= t; ++i) {
  const [x, y] = input[i].split(' ').map(Number);
  const sum = x + y;

  answer += `${sum}\n`;
}

console.log(answer);
