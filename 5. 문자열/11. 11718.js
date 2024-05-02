const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';
for (const word of input) {
  answer += `${word}\n`;
}

console.log(answer);
