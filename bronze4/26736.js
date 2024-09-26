// Wynik meczu (26736)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = input[0];

let scoreA = 0;
let scoreB = 0;

for (const score of scores) {
  if (score === 'A') {
    ++scoreA;
  } else {
    ++scoreB;
  }
}

console.log(`${scoreA} : ${scoreB}`);
