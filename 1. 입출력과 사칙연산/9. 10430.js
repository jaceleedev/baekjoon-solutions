const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const first = (a + b) % c;
const second = ((a % c) + (b % c)) % c;
const third = (a * b) % c;
const fourth = ((a % c) * (b % c)) % c;

console.log(`${first}\n${second}\n${third}\n${fourth}`);
