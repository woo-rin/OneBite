// 6가지의 요소 조작 매서드

//1. push
// 배열의 맨뒤에 새로운 요소를 추가하는 매서드
let arr1 = [1,2,3];
arr1.push(4,5,6);

//2.pop
//배열읠 맨뒤에 있는 요소를 제거하고, 반환
const popl = arr1.pop();

//3. shift 
//매열의 맨앞에 있는 요소를 제거하고, 반환
const popd = arr1.shift();

//4. unshift
//배열의 맨앞에 새로운 요소를 추가하는 매서드
const ghj = arr1.unshift(0);

//shift와 unshift는 pop과 push보다 우선순위가 낮다, 그래서 이후에 작동한다

//5.slice
//마치 가위처럼, 매열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr2 = [1,2,3,4,5];
let sliced = arr2.slice(2, 5); // 내가워하는 인덱스값에 +1를 하여서 입력해야한다
let sliced2 = arr2.slice(2); //2두번째즉 끝나는 지점을 지정하지 않는다면 끝까지 잘라낸다
let sliced3 = arr2.slice(-1); // 음수로 값을 지정하면 그수만큼 뒤에서 부터 잘라낸다

//6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환

let arr4 = [1,2,3];
let arr5 = [4,5,6];
let cat = arr4.concat(arr5);
console.log(cat)