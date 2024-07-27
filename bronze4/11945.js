// 뜨거운 붕어빵 (11945)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; ++i) {
  console.log(input[i].split('').reverse().join(''));
}
