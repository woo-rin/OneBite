/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue(['s', 1, 2]); // number
//0

let len = returnFirstValue([1, 'hello', 'mynameis']); // string
//hello

/**
 * 세번제 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 4]);
let var2 = getLength('');
let var3 = getLength({ length: 10 });
let var4 = getLength(10);
