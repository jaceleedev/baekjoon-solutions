// 帰省 (Homecoming) (24072)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (c >= a && c < b) {
  console.log(1);
} else {
  console.log(0);
}
