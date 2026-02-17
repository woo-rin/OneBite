//기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

//객체타입간의 호한성
//-> 어떤 객체타입을 다른 객체타입으로 취급해도  괜찮은가?
type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: '노란색',
};
let dog: Dog = {
  name: '이바',
  color: '흰색',
  breed: '진도',
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};
type programmingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let skillBook: programmingBook = {
  name: '한입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'react',
};

//초과 프로퍼티 검사

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: '한입크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'react:js',
};

let book3: Book = skillBook;
function func(book: Book) {}
func({
  name: '한입크기로 잘먹는 리앸ㄱ트',
  price: 22000,
});
func(skillBook);
