// Winning Score (17009)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const appleScore =
  Number(input[0]) * 3 + Number(input[1]) * 2 + Number(input[2]);
const bananaScore =
  Number(input[3]) * 3 + Number(input[4]) * 2 + Number(input[5]);

if (appleScore > bananaScore) {
  console.log('A');
} else if (appleScore < bananaScore) {
  console.log('B');
} else {
  console.log('T');
}
