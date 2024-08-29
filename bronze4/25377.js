// 빵 (25377)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let answer = -1;

for (let i = 1; i <= n; ++i) {
  const [a, b] = input[i].split(' ').map(Number);

  if (a <= b) {
    if (answer === -1 || answer > b) {
      answer = b;
    }
  }
}

console.log(answer);
