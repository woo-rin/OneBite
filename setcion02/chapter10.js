// 1. Date 객체 생성하는 방법
let Date1 = new Date(); // 생성자
// 매개변수가 없다면 현재시간을 저장한다
let Date2 = new Date("2009-10-28/10:20"); // 문자열 혹은 숫자(,를 통해 구분) 로 입력가능


//2.타임 스팸트
//특정시간"1970-01-01' 부터 몇 ms가 흘렀는지를 의미하는 숫자값
let ts1  = Date1.getTime();
console.log(ts1)

//3.시간요소들을 추출하는방법
let year = Date1.getFullYear
let month = Date1.getMonth;
let day = Date1.getDate;

let hours = Date1.getHours;
let mintues = Date1.getMinutes;
let second  = Date1.getSeconds;

//4.시간 수정하기
Date1.setDate(30);
Date1.setMinutes(30);

//5.시간을 여러 포멧으로 출력하기
console.log(Date1.toDateString());
console.log(Date1.toLocaleDateString());