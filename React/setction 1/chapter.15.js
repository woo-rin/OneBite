console.log("dldd")
//1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}// 객체 리터릴(대부분 사용)

//2. 객체 프로퍼티 (객체 속성)
//입력 방법 key: value,
let person ={
    name : "이우린", // key는 문자열 혹은 int
    age : 17,
    hobby : "야구",
    job : "노트북 만지는 사탐",
    extra: {}, // 프러퍼티 안에 객체 사용가능
    10:20, // int 로 key
    "like cat":"고양이" // 뛰어쓰기 할떼는 ""이거로 감싸주기
};

// 3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근 (점표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 타입스크립트에 대해서 경고하는거

let age = person["age"]; // 문자열로 작성하기

let property = "hobby";
let hobby = person[property];

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe deve";
person["height"] = 173;

//3.3 프로퍼티를 수정하는 방법
person.job = "person"
person["name"]

//3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["extra"];

//3.5 프로퍼티의 존재유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log("1")

