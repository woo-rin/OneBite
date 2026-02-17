// 타입단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = 'woorin';
person.age = 18;

type Dog = {
  name: string;
  color: string;
};
let dog = {
  name: 'dlqk',
  color: 'white',
  breed: 'mix',
} as Dog;

//타입단언의 규칙
//값 as 단언 <- 딘언식
// A as B
//A가 B의 슈퍼타입이거나
//A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

//const 단언

let num4 = 10 as const;

let cat = {
  name: 'jack',
  color: 'black',
} as const;

// Non Null 단언

type Pst = {
  title: string;
  author?: string;
};

let post: Pst = {
  title: 'woo',
  author: 'woorin',
};
const len: number = post.author!.length;
