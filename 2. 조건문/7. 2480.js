function getPrize(a, b, c) {
  let prize = 0;

  if (a === b && b === c) {
    prize = 10000 + a * 1000;
  } else if (a === b || a === c || b === c) {
    const sameDice = a === b ? a : b === c ? b : c;
    prize = 1000 + sameDice * 100;
  } else {
    prize = Math.max(a, b, c) * 100;
  }

  return prize;
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

console.log(getPrize(a, b, c));
