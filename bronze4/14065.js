// Gorivo (14065)
// 평소와 다르게 readFileSync에서 에러가 난다. 0으로 고쳐주면 해결된다.
const input = require('fs').readFileSync(0).toString().trim().split('\n');

const mpg = Number(input[0]);

const answer = 100 / ((1.609344 / 3.785411784) * mpg);

console.log(answer.toFixed(6));
