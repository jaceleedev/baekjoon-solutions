// 나이 계산하기 (16199)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const birthDate = input[0].split(' ').map(Number);
const targetDate = input[1].split(' ').map(Number);

let standardAge = 0;
let koreanAge = 0;
let lawAge = 0;

const yearDiff = targetDate[0] - birthDate[0];
const monthDiff = targetDate[1] - birthDate[1];
const dayDiff = targetDate[2] - birthDate[2];

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  standardAge = yearDiff - 1;
} else {
  standardAge = yearDiff;
}

koreanAge = yearDiff + 1;
lawAge = yearDiff;

console.log(standardAge);
console.log(koreanAge);
console.log(lawAge);
