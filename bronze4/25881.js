// Electric Bill (25881)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [baseRate, additionalRate] = input[0].split(' ').map(Number);
const n = Number(input[1]);

for (let i = 2; i <= n + 1; ++i) {
  const usage = Number(input[i]);
  const baseUsage = Math.min(usage, 1000);
  const additionalUsage = Math.max(usage - 1000, 0);
  const totalCost = baseUsage * baseRate + additionalUsage * additionalRate;

  console.log(`${usage} ${totalCost}`);
}
