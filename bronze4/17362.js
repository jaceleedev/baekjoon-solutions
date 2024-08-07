// 수학은 체육과목 입니다 2 (17362)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const position = (n - 1) % 8;

switch (position) {
  case 0:
    console.log(1);
    break;
  case 1:
  case 7:
    console.log(2);
    break;
  case 2:
  case 6:
    console.log(3);
    break;
  case 3:
  case 5:
    console.log(4);
    break;
  case 4:
    console.log(5);
    break;
}
