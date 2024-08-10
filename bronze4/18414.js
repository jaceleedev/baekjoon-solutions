// X に最も近い値 (The Nearest Value) (18414)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [x, l, r] = input[0].split(' ').map(Number);

let answer;

if (x <= l) {
  answer = l;
} else if (x >= r) {
  answer = r;
} else {
  answer = x;
}

console.log(answer);
