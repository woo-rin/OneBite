//5가지 요소순회 및 탐색 매서드
//1.forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
arr1.forEach(function(item,idx,arr) {
    console.log(idx, item *2);
});

let doubled = [];
arr1.forEach((item)=>{
    doubled.push(item*2);
})

//2.includes
//배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1,2,3];
let istrue = arr2.includes(1);
//true, false 값으로 반환

//3. indexOf 
// 특정요소와 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
//찾지 못한다면 -1 로 찾지못하였다고 반환

//4.findIndex
//모든 요소를 순회하면서, 콜백함수를 만족하는 그런
//믁정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
let find = arr4.indexOf((item) =>{
    if(item &2 !== 0 ) return true;
})

//단순한 배열의 값을 찾을 때는 indeOf를 사용해도 충분하지만
// 복잡한 객체의 값을 찾을려고 하면 findindex를 사용하는게 안전하다

//5.find
//모든 요소를 순회하면서 코뱍함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 =[
    {name:"woo"},
    {name:"rin"}
];

const finded = arr5.find(
    (item) => item.name === "woo"
)
console.log(finded)
