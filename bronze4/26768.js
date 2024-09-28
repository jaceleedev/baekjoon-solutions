// H4x0r (26768)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

const replacements = {
  a: '4',
  e: '3',
  i: '1',
  o: '0',
  s: '5',
};

let result = '';

for (const char of word) {
  if (replacements[char]) {
    result += replacements[char];
  } else {
    result += char;
  }
}

console.log(result);
