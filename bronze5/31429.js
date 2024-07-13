// SUAPC 2023 Summer (31429)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const map = {
  1: [12, 1600],
  2: [11, 894],
  3: [11, 1327],
  4: [10, 1311],
  5: [9, 1004],
  6: [9, 1178],
  7: [9, 1357],
  8: [8, 837],
  9: [7, 1055],
  10: [6, 556],
  11: [6, 773],
};

console.log(map[n].join(' '));
