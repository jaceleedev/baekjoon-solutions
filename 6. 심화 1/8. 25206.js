const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const gradeToScore = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalPoint = 0;
let totalCredit = 0;
for (let i = 0; i < 20; ++i) {
  const [subject, credit, grade] = input[i].split(' ');
  const numberCredit = Number(credit);

  if (grade === 'P') {
    continue;
  }

  const point = numberCredit * gradeToScore[grade];

  totalPoint += point;
  totalCredit += numberCredit;
}

console.log(totalPoint / totalCredit);
