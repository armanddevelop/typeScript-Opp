// const getValue = (value: unknown) => {
//   return value;
// };

import { Dog } from './09-protected';

// const getValue = (value: number | string) => {
//   return value;
// };
// const getValue = <myType, myType2>(value: myType, value2: myType2) => {
//   return value;
// };

const getValue = <myType>(value: myType) => {
  return value;
};

// getValue<number, object>(12, {});
// getValue<string, number>('12', 3);
// getValue<number[], string[]>([1, 2, 5, 5], ['']);
const dog = new Dog('chue', 'carlitos');
getValue<Dog>(dog).bark(2);
