const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);
const v = Number(input[2]);

const answer = arr.filter((num) => num === v).length;

console.log(answer);
