// !밀비 급일 (11365)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  console.log(input[i].split('').reverse().join(''));
}
