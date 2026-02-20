// 함수타입 정의

//어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지
function func(a: number, b: number): number {
  return a + b;
}

//화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number) => a + b;

//함수의 매개변수

function introduce(name = 'woo', age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall:${tall}`);
  }
}

introduce('d', 18, 173);
introduce('d', 18);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3);
