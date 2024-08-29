// 샤틀버스 (25625)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [x, y] = input[0].split(' ').map(Number);

if (x >= y) {
  console.log(x + y);
} else {
  console.log(y - x);
}
