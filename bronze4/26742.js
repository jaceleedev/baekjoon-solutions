// Skarpetki (26742)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const socks = input[0];

let whiteCount = 0;
let blackCount = 0;

for (const sock of socks) {
  if (sock === 'B') {
    ++whiteCount;
  } else if (sock === 'C') {
    ++blackCount;
  }
}

const whitePairs = Math.floor(whiteCount / 2);
const blackPairs = Math.floor(blackCount / 2);

console.log(whitePairs + blackPairs);
