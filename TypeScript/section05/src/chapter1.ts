/**
 * 이터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: 'dlqk',
  age: 12,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface dogCat extends Dog, Cat {}
const dogCat: dogCat = {
  name: 'dkqk',
  age: 14,
  isBark: true,
  isScratch: false,
};
