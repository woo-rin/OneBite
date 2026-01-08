// 1.상수 객체
const animal = {
    type: "cat",
    name: "dlqk",
    color: "black"
}

animal.age = 2; // 추가
animal.name ="jack"; // 수정
delete animal.age; // 삭제

//2. 메서드
//-> 값이 함수인 프로퍼트를 말함

const person ={
    name: "이우린",
    //메서드 선언
    sayHi() {
        console.log("ㅇㅇㅇ")
    },
};
person.sayHi();