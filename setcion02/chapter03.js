//1. 배열의 구조분해 활당
let arr = [1,2,3];

let [one,two,three, four=(10)] = arr;
//console.log(four)
//2. 객체의 구조분해 활당
let persone = {
    name: "woo",
    hobby: "game"
}
let {name, hobb, plus= "hello"} = persone;
console.log(plus)

//3. 객체 구조 분해 활당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,hobby,plus}) =>{
    console.log(name,hobby)

}
func(persone);