function getQuadrantN(x, y) {
  let n = 0;

  if (x > 0) {
    if (y > 0) {
      n = 1;
    } else {
      n = 4;
    }
  } else {
    if (y > 0) {
      n = 2;
    } else {
      n = 3;
    }
  }

  return n;
}

// 평소와 다르게 readFileSync에서 에러가 난다. 0으로 고쳐주면 해결된다.
// readLine 모듈을 사용하면 해결이 된다고 한다.
const input = require('fs').readFileSync(0).toString().split('\n');

const [x, y] = input.map(Number);

console.log(getQuadrantN(x, y));
