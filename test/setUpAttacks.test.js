import { setUpAttacks } from '../src/js/setUpAttacks';

test('Лучник минус 50, без магии', () => {
  const sourceData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const attacks = setUpAttacks(sourceData, false);

  attacks[1](50);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 30 },
    { name: 'мечник', health: 10 },
  ];

  expect(sourceData).toEqual(expected);
});

test('Лучник минус 100, с магией', () => {
  const sourceData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const attacks = setUpAttacks(sourceData, true);

  attacks[1](100);

  const expected = [
    { name: 'маг', health: 67 },
    { name: 'лучник', health: 45.99999999999999 },
    { name: 'мечник', health: 0 },
  ];

  expect(sourceData).toEqual(expected);
});

test('Маг - 9, с магией', () => {
  const sourceData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const attacks = setUpAttacks(sourceData, true);

  attacks[1](100);
  attacks[0](9);

  const expected = [
    { name: 'маг', health: 62 },
    { name: 'лучник', health: 41.99999999999999 },
    { name: 'мечник', health: 0 },
  ];

  expect(sourceData).toEqual(expected);
});

test('Мерттвый мечник - 29, с магией', () => {
  const sourceData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const attacks = setUpAttacks(sourceData, true);

  attacks[1](100);
  attacks[0](9);
  attacks[2](29);

  const expected = [
    { name: 'маг', health: 62 },
    { name: 'лучник', health: 41.99999999999999 },
    { name: 'мечник', health: 0 },
  ];

  expect(sourceData).toEqual(expected);
});
