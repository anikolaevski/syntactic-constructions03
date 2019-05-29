/* eslint-disable no-console */
// TODO: write code here
import { setUpAttacks } from './setUpAttacks';

console.log('app.js bundled');

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const attacks = setUpAttacks(characters, true);

console.log('Исходный объект:');
console.table(characters);
console.log(attacks);
attacks[1](100);
console.log('Лучник - 100, со всех снимаем по 33, с лучника остаток');
console.table(characters);
attacks[2](29);
console.log('Мечник - 29, уже мертвый, ничего не происходит');
console.table(characters);
attacks[0](9);
console.log('Маг - 9, с мага снимаем 5, с лучника 4');
console.table(characters);
