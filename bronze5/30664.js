// Loteria Falha (30664)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let i = 0;

while (true) {
  const number = BigInt(input[i]);

  if (number === 0n) {
    break;
  }

  if (number % 42n === 0n) {
    console.log('PREMIADO');
  } else {
    console.log('TENTE NOVAMENTE');
  }

  ++i;
}
