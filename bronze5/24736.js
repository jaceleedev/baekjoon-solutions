// Football Scoring (24736)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const map = {
  0: 6,
  1: 3,
  2: 2,
  3: 1,
  4: 2,
};

const vTeam = input[0].split(' ').map(Number);
const hTeam = input[1].split(' ').map(Number);
const length = vTeam.length;

let vScore = 0;
let hScore = 0;

for (let i = 0; i < length; ++i) {
  vScore += vTeam[i] * map[i];
  hScore += hTeam[i] * map[i];
}

console.log(`${vScore} ${hScore}`);
