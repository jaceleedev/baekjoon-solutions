// 특별한 날 (10768)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const month = Number(input[0]);
const day = Number(input[1]);

if (month < 2 || (month === 2 && day < 18)) {
  console.log('Before');
} else if (month === 2 && day === 18) {
  console.log('Special');
} else {
  console.log('After');
}
