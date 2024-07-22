// Patyki (8723)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const isEquilateralTriangle = a === b && b === c;

const sortedSides = [a, b, c].sort((x, y) => x - y);
const [side1, side2, side3] = sortedSides;
const isRightTriangle = side1 ** 2 + side2 ** 2 === side3 ** 2;

if (isEquilateralTriangle && isRightTriangle) {
  console.log(3);
} else if (isEquilateralTriangle) {
  console.log(2);
} else if (isRightTriangle) {
  console.log(1);
} else {
  console.log(0);
}
