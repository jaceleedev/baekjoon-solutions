// 코드마스터 2023 (28235)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const slogan = input[0];
const map = {
  SONGDO: 'HIGHSCHOOL',
  CODE: 'MASTER',
  2023: '0611',
  ALGORITHM: 'CONTEST',
};

console.log(map[slogan]);
