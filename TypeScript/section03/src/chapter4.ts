/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 마들어낸 타입
 * -> 합집하 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - union 타입
 */

let a: string | number | boolean;
a = 1;
a = '1';

a = true;

let arr: (number | string | boolean)[] = [1, '1', true];

type Union = Dog | Person;

let union1: Union = {
  // dog
  name: '',
  color: '',
};

let union2: Union = {
  // person
  name: '',
  language: '',
};

let union3: Union = {
  //dog&&person
  name: '',
  color: '',
  language: '',
};

/**
 * 2.  교집합 타입 - Intersection 타입
 */

let variable: number & string; // never 타입

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;
let Intersection1: Intersection = {
  name: '',
  color: '',
};
