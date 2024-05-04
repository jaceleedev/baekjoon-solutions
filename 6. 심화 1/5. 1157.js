const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0].toUpperCase();
const map = {};

for (const ch of word) {
  if (!map[ch]) {
    map[ch] = 1;
  } else {
    ++map[ch];
  }
}

let mostUsedAlphabet = '';
let count = 0;
for (const el in map) {
  if (map[el] > count) {
    count = map[el];
    mostUsedAlphabet = el;
  } else if (map[el] === count) {
    mostUsedAlphabet = '?';
  }
}

console.log(mostUsedAlphabet);
