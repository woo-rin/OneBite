//1. 묵시적 행변환 
//js가 알아서 변환
let num =10;
let str ="20";
const result = num+str;
console.log(result)
// 결과값은 1020 즉 result에서 목시적 형변환을 통해서 num의 10이
//number type에서 string type으로 변환된거 

//명시적 형변환
//우리가 내장함수를 이용해서 직접 형을 변환하는거
//문자열 -> 숫자
let str1 ="10";
let strTOnum1 = Number(str1);
console.log(10 + strTOnum1);
//문자열을 숫자로 바꿀려면 number라는 내장함수를 사용할수있다 
let str2 = "10ge";
let strTonum2 = Number(str2);
console.log(10+strTonum2);// 결과 NaN즉 not a number 숫자아니라고
//그래서 이런경우는 number 대신 persint를 사용한다 
// 근데 persint를 사용하여도 앞에 문자가 있으면 NaN이 나올수있다.

// 숫자 -> 문자열 
let num1 = 20;
let nuum1to = String(num1);
console.log(nuum1to + "입니다");
//string을 이용하여서 20을 문자열로 바꿈 