const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

const answer = new Array(26).fill(-1);
const alphabets = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < word.length; ++i) {
  const alphabet = word.charAt(i);
  const alphabetIndex = alphabets.indexOf(alphabet);

  if (answer[alphabetIndex] === -1) {
    answer[alphabetIndex] = i;
  }
}

console.log(answer.join(' '));
