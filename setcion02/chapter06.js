//1. 배열 순회
let arr = [1,2,3];
//1.1 배열 인덱스 
for (let i=0; i < arr.length; i++){ // length는 배열의 길이를 나타내는 프러퍼티

}

let arr2 = [4,5,6,7,8];
for(i=0; i< arr2.length; i++){
    //console.log(arr2[i])
}

//1.2 for of 반복문
for(let item of arr){
    //console.log(item)
}
//2. 객체 순회
let persone = {
    name: "woo",
    age: 17,
    hobby: "game"
}
//2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(persone);
for(let key of keys){
    const value = persone[key]
    //console.log(key,value)
}
//2.2 Object.values
//- > 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(persone);
for(let value of values){
    //console.log(value)
}
//2.3 for in
//-> 객체를 위한 반복문
for (let key in persone){
    console.log(key)
}

//for of 와 for in은 햇갈리기 쉬우니 주의가 필요하다
