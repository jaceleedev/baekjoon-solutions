// IT Passport Examination (11257)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const result = [];

for (let i = 1; i <= n; ++i) {
  const [id, s1, s2, s3] = input[i].split(' ').map(Number);

  const total = s1 + s2 + s3;
  const passTotal = total >= 55;
  const passStrategy = s1 >= 35 * 0.3;
  const passManagement = s2 >= 25 * 0.3;
  const passTechnology = s3 >= 40 * 0.3;

  const pass = passTotal && passStrategy && passManagement && passTechnology;

  result.push(`${id} ${total} ${pass ? 'PASS' : 'FAIL'}`);
}

console.log(result.join('\n'));
