// 특별한 학교 이름 (27889)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const shortName = input[0];

const map = {
  NLCS: 'North London Collegiate School',
  BHA: 'Branksome Hall Asia',
  KIS: 'Korea International School',
  SJA: 'St. Johnsbury Academy',
};

console.log(map[shortName]);
