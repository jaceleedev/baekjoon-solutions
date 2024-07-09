// 성택이의 은밀한 비밀번호 (25372)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const password = input[i];
  const length = password.length;

  if (length >= 6 && length <= 9) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}
