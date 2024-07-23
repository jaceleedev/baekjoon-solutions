// 삼각형 외우기 (10101)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const angles = [];

for (const angle of input) {
  angles.push(Number(angle));
}

angles.sort((a, b) => a - b);

const [a, b, c] = angles;

if (a + b + c !== 180) {
  console.log(`Error`);
} else if (a === b && b === c) {
  console.log(`Equilateral`);
} else if (a === b || b === c) {
  console.log(`Isosceles`);
} else {
  console.log(`Scalene`);
}
