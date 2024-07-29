// 치킨 두 마리 (...) (14489)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

if (a + b >= c * 2) {
  console.log(a + b - c * 2);
} else {
  console.log(a + b);
}
