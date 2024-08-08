// Basketball One-on-One (18198)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const line = input[0];
const map = {
  A: 0,
  B: 0,
};

let player = '';

for (const ch of line) {
  if (ch === 'A' || ch === 'B') {
    player = ch;
  } else {
    map[player] += Number(ch);
  }
}

console.log(map['A'] > map['B'] ? 'A' : 'B');
