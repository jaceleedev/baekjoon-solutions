// Identifying tea (11549)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
const guesses = input[1].split(' ').map(Number);

const numberOfAnswers = guesses.filter((guess) => guess === t).length;

console.log(numberOfAnswers);
