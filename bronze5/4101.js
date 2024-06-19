// 크냐? (4101)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input.length;
let answer = '';

for (let i = 0; i < length - 1; ++i) {
  const [a, b] = input[i].split(' ').map(Number);
  const word = a > b ? 'Yes' : 'No';
  answer += `${word}\n`;
}

console.log(answer);
