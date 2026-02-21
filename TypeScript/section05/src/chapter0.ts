/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}
const person: Person = {
  name: 'woo',
  age: 18,
  sayHi: function () {
    console.log('hi');
  },
};

person.sayHi(1, 2);
