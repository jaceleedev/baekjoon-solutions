// Tournament Selection (14038)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const wins = input.filter((result) => result === 'W').length;

if (wins >= 5) {
  console.log(1);
} else if (wins >= 3) {
  console.log(2);
} else if (wins >= 1) {
  console.log(3);
} else {
  console.log(-1);
}
