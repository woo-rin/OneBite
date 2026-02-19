// 1.배열생성
let arrA = new Array(); // 베열생성자
let arrB = []; // 배열리터럴(대부분 사용)

let arrC = [
    1,
    2,
    3,
    true,
    "hello",
    undefined,
    () =>{},
    {},
    [],
]
//2. 배열요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1,item2);
arrC[0] = "hell0";
let item3 = arrC[0];
console.log(item3);