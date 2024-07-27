// The Merchant of Venice (13496)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const k = Number(input[0]);
let lineIndex = 1;

for (let dataSet = 1; dataSet <= k; ++dataSet) {
  const [n, s, d] = input[lineIndex++].split(' ').map(Number);

  let totalValue = 0;

  for (let j = 0; j < n; ++j) {
    const [di, vi] = input[lineIndex++].split(' ').map(Number);
    const daysRequired = Math.ceil(di / s);

    if (daysRequired <= d) {
      totalValue += vi;
    }
  }

  console.log(`Data Set ${dataSet}:`);
  console.log(totalValue);
  console.log('');
}
