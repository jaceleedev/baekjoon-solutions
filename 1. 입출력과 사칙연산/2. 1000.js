const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ');

console.log(Number(a) + Number(b));
