// 이 문제는 trim을 넣어주지 않으면 실패한다.
// 맨 마지막에 \n이 들어가는 케이스가 있어서 그런 것으로 추정된다.
// 실제로는 trim을 쓰지 않아도 로직이 정상적으로 작동한다.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input.length;

let answer = '';
for (let i = 0; i < length; ++i) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += `${a + b}\n`;
}

console.log(answer);
