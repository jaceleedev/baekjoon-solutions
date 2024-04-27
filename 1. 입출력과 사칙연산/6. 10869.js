const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ').map(Number);

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = Math.floor(a / b);
const remainder = a % b;

console.log(
  `${addition}\n${subtraction}\n${multiplication}\n${division}\n${remainder}`
);
