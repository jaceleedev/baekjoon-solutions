// Pizza (26566)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let index = 1;

for (let i = 0; i < n; ++i) {
  const [a1, p1] = input[index++].split(' ').map(Number);
  const [r1, p2] = input[index++].split(' ').map(Number);

  const sliceValue = a1 / p1;
  const wholeValue = (Math.PI * r1 * r1) / p2;

  if (wholeValue > sliceValue) {
    console.log('Whole pizza');
  } else {
    console.log('Slice of pizza');
  }
}
