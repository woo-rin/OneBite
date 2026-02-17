// 타입 추론

let a = 10;
let b = '10';
let c = {
  id: 1,
  name: 'woo',
  profile: {
    ncikname: 'dlqk',
  },
  urls: ['https://dl1k.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return ' hello';
}

let d;
d = 10;
d = 'dlqk';

const num = 10;

let arr = [1, 'hello'];
