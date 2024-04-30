const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const answer = arr.filter((num) => num < x).join(' ');

console.log(answer);
