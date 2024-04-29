const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const t = Number(input[0])

for (let i = 1; i <= t; ++i) {
  const [a, b] = input[i].split(' ').map(Number)
  console.log(a + b)
}