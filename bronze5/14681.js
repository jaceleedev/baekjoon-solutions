// 사분면 고르기 (14681)
// 평소와 다르게 readFileSync에서 에러가 난다. 0으로 고쳐주면 해결된다.
const input = require('fs').readFileSync(0).toString().trim().split('\n');

const x = Number(input[0]);
const y = Number(input[1]);

if (x > 0 && y > 0) {
  console.log(1);
}

if (x > 0 && y < 0) {
  console.log(4);
}

if (x < 0 && y > 0) {
  console.log(2);
}

if (x < 0 && y < 0) {
  console.log(3);
}
