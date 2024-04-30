const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

let maxNum = input[0];
let maxIndex = 0;

for (let i = 1; i < input.length; ++i) {
  if (input[i] > maxNum) {
    maxNum = input[i];
    maxIndex = i;
  }
}

console.log(maxNum);
console.log(maxIndex + 1);
