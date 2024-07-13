// 진흥원 세미나 (30087)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const map = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: 'B101',
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

for (let i = 1; i <= n; ++i) {
  const seminar = input[i];

  console.log(map[seminar]);
}
