// Periods (26560)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  let line = input[i];

  if (line[line.length - 1] !== '.') {
    line += '.';
  }

  console.log(line);
}
