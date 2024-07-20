// ISBN (6810)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = 120 - 29;

for (let i = 0; i < input.length; ++i) {
  const digit = Number(input[i]);

  if (i % 2 === 0) {
    sum += digit * 1;
  } else {
    sum += digit * 3;
  }
}

console.log(`The 1-3-sum is ${sum}`);
