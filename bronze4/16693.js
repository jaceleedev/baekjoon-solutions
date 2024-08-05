// Pizza Deal (16693)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a1, p1] = input[0].split(' ').map(Number);
const [r1, p2] = input[1].split(' ').map(Number);

const area = Math.PI * r1 * r1;

const slicePrice = a1 / p1;
const wholePrice = area / p2;

if (wholePrice > slicePrice) {
  console.log('Whole pizza');
} else {
  console.log('Slice of pizza');
}
