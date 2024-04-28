const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const score = Number(input[0]);
let grade = 'F';

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
}

console.log(grade);
