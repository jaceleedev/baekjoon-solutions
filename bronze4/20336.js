// Haughty Cuisine (20336)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const array = input[1].split(' ');

for (const element of array) {
  console.log(element);
}
