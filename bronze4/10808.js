// 알파벳 개수 (10808)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const s = input[0];
const map = {};

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); ++i) {
  const ch = String.fromCharCode(i);
  map[ch] = 0;
}

for (const ch of s) {
  map[ch] += 1;
}

console.log(
  Object.keys(map)
    .map((key) => map[key])
    .join(' ')
);
