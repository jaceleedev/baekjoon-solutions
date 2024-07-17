// Dedupe (5357)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const str = input[i];
  const stack = [str[0]];

  for (let j = 1; j < str.length; ++j) {
    if (str[j] !== str[j - 1]) {
      stack.push(str[j]);
    }
  }

  console.log(stack.join(''));
}
