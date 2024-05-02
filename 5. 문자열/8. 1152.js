const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sentence = input[0].trim().split(' ');

if (sentence[0] === '') {
  console.log(0);
} else {
  console.log(sentence.length);
}
