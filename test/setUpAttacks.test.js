/* eslint-disable no-return-assign */
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

  const modifiedData = sourceData[1].health;
  const expected = 46;
  expect(modifiedData).toBeCloseTo(expected);
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

  const modifiedData = sourceData[1].health;
  const expected = 42;

  expect(modifiedData).toBeCloseTo(expected);
});

test('Мерттвый мечник - 29, с магией', () => {
  const sourceData = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const attacks = setUpAttacks(sourceData, true);

  attacks[1](100);
  attacks[2](29);
  attacks[0](9);

  const modifiedData = sourceData[1].health;

  const expected = 42;

  expect(modifiedData).toBeCloseTo(expected);
});
