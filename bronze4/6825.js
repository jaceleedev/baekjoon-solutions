// Body Mass Index (6825)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const weight = Number(input[0]);
const height = Number(input[1]);

const bmi = weight / (height * height);

if (bmi >= 25) {
  console.log(`Overweight`);
} else if (bmi >= 18.5) {
  console.log(`Normal weight`);
} else {
  console.log(`Underweight`);
}
