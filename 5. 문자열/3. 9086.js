const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

let answer = '';
for (let i = 1; i <= t; ++i) {
  const word = input[i];

  answer += `${word.charAt(0)}${word.charAt(word.length - 1)}\n`;
}

console.log(answer);
