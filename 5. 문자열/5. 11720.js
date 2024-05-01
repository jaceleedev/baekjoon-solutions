const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const str = input[1];

let answer = 0;
for (let i = 0; i < n; ++i) {
  const num = Number(str.charAt(i));

  answer += num;
}

console.log(answer);
