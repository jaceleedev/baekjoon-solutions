function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const year = Number(input[0]);

console.log(Number(isLeapYear(year)));
