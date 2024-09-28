// Hurra! (26767)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let result = '';

for (let i = 1; i <= n; ++i) {
  if (i % 7 === 0 && i % 11 === 0) {
    result += 'Wiwat!\n';
  } else if (i % 7 === 0) {
    result += 'Hurra!\n';
  } else if (i % 11 === 0) {
    result += 'Super!\n';
  } else {
    result += i + '\n';
  }
}

console.log(result);
