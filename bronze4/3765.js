// Celebrity jeopardy (3765)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; ++i) {
  console.log(input[i]);
}
