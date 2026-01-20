//1. spread 연산자
// -> Spread : 흩뿌리다, 퍼뜨리다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
//console.log(arr2);

let odj1 = {
    a: 1,
    b: 2,
}
let odj2 ={
    ...odj1,
    c:3,
    d:4,
}

function func(p1, p2, p3) {
    console.log(p1,p2,p3)
}
func(...arr1)

//2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
function funcA(...Rest){
    console.log(...Rest)
}
funcA(...arr1,...arr2)