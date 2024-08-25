// ЧАСОВНИК (24356)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [t1, m1, t2, m2] = input[0].split(' ').map(Number);

const startMin = t1 * 60 + m1;
const endMin = t2 * 60 + m2;

let diff = 0;

if (endMin >= startMin) {
  diff = endMin - startMin;
} else {
  diff = 24 * 60 + endMin - startMin;
}

const laps = Math.floor(diff / 30);

console.log(diff, laps);
