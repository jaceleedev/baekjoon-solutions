// 와글와글 숭고한 (17388)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const participants = input[0].split(' ').map(Number);
const map = {
  0: 'Soongsil',
  1: 'Korea',
  2: 'Hanyang',
};
const total = participants.reduce((acc, curr) => acc + curr);
const min = Math.min(...participants);
const minIndex = participants.indexOf(min);

if (total >= 100) {
  console.log('OK');
} else {
  console.log(map[minIndex]);
}
