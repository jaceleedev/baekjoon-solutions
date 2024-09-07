// Find the Twins (25932)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const numbers = input[i].split(' ').map(Number);
  const isZack = numbers.find((number) => number === 17);
  const isMack = numbers.find((number) => number === 18);

  console.log(numbers.join(' '));

  if (isZack && isMack) {
    console.log('both');
  } else if (isZack) {
    console.log('zack');
  } else if (isMack) {
    console.log('mack');
  } else {
    console.log('none');
  }

  console.log();
}
