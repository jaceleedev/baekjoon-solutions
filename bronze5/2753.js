// 윤년 (2753)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const year = Number(input[0]);

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(Number(isLeapYear));
