const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const a = Number(input[0]);
const b = input[1];

const first = a * Number(b[2]);
const second = a * Number(b[1]);
const third = a * Number(b[0]);
const fourth = a * Number(b);

console.log(`${first}\n${second}\n${third}\n${fourth}`);
