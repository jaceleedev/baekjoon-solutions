const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const answer = new Set();

for (const num of input) {
  answer.add(num % 42);
}

console.log(answer.size);
