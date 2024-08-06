// Time to Decompress (17010)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const l = Number(input[0]);

for (let i = 1; i <= l; ++i) {
  const [num, ch] = input[i].split(' ');

  console.log(ch.repeat(Number(num)));
}
