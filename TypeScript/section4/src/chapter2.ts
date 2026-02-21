// 맥북 거치대, 세탁기 에서 옷 줍기, 김흑 빈 에니 리스트

/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 를 판단하는
 * 1.반환값의 타입이 호환되는가
 * 2.매겨변수의 타입이 호환되는가
 */

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let DogFunc = (Dog: Dog) => {
  console.log(Dog.name);
  console.log(Dog.color);
};

// animalFunc = DogFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

// 2-2. 매겨변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => number;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
