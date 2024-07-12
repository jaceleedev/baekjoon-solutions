// 정보섬의 대중교통 (28113)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, a, b] = input[0].split(' ').map(Number);
const busTime = a;
const subwayTime = b;

if (busTime < subwayTime) {
  console.log('Bus');
} else if (subwayTime < busTime) {
  console.log('Subway');
} else {
  console.log('Anything');
}
