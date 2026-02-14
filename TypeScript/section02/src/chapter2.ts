// 배열
let numArr: number[] = [1, 2, 3];

let strArr: String[] = ['hello', "I'm", 'woorin'];

let boolArr: Array<boolean> = [true, false];

//배열에 들어가는 요소들의 타입이 다양할경우
let multiArr: (string | number)[] = [1, 'hello'];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup3: [number, string, boolean] = [1, '1', true];

const users: [string, number][] = [
  ['woo', 1],
  ['lee', 2],
  ['rin', 3],
  // [4, 'kim'],
];
