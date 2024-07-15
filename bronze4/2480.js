// 주사위 세개 (2480)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const dices = input[0].split(' ').map(Number);
dices.sort((a, b) => a - b);
const [a, b, c] = dices;

if (a === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c) {
  if (a === b) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + b * 100);
  }
} else if (a !== b && b !== c) {
  console.log(c * 100);
}
