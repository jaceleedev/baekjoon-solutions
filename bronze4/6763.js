// Speed fines are not fine! (6763)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const limit = Number(input[0]);
const speed = Number(input[1]);
const overLimit = speed - limit;

if (overLimit >= 31) {
  console.log('You are speeding and your fine is $500.');
} else if (overLimit >= 21) {
  console.log('You are speeding and your fine is $270.');
} else if (overLimit >= 1) {
  console.log('You are speeding and your fine is $100.');
} else {
  console.log('Congratulations, you are within the speed limit!');
}
