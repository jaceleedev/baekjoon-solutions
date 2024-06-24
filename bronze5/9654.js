// 나부 함대 데이터 (9654)
const ships = [
  {
    name: 'N2 Bomber',
    class: 'Heavy Fighter',
    deployment: 'Limited',
    service: '21',
  },
  {
    name: 'J-Type 327',
    class: 'Light Combat',
    deployment: 'Unlimited',
    service: '1',
  },
  {
    name: 'NX Cruiser',
    class: 'Medium Fighter',
    deployment: 'Limited',
    service: '18',
  },
  {
    name: 'N1 Starfighter',
    class: 'Medium Fighter',
    deployment: 'Unlimited',
    service: '25',
  },
  {
    name: 'Royal Cruiser',
    class: 'Light Combat',
    deployment: 'Limited',
    service: '4',
  },
];

console.log(
  formatField('SHIP NAME', 15) +
    formatField('CLASS', 15) +
    formatField('DEPLOYMENT', 11) +
    formatField('IN SERVICE', 10)
);

ships.forEach((ship) => {
  console.log(
    formatField(ship.name, 15) +
      formatField(ship.class, 15) +
      formatField(ship.deployment, 11) +
      formatField(ship.service, 10)
  );
});

function formatField(value, width) {
  return value.toString().padEnd(width, ' ');
}
