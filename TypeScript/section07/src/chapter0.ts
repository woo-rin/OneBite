/**
 * 제네릭(포괄적인 함수)
 */
// 제네릭 함수

function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func('ss');

let arr = func<[number, number]>([12.3, 3]);
