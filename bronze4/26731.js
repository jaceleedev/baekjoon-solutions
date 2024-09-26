// Zagubiona litera (26731)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const inputLetters = new Set(input[0]);
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (const letter of alphabet) {
  if (!inputLetters.has(letter)) {
    console.log(letter);
    break;
  }
}
