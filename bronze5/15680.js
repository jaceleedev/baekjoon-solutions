// 연세대학교 (15680)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

if (n === 0) {
  console.log(`YONSEI`);
} else if (n === 1) {
  console.log(`Leading the Way to the Future`);
}
