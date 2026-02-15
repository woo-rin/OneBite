//any
//특정 변수의 타입을 우리가 확실히 모를때
let anyvar: any = 10;
anyvar = '10';

anyvar = false;
anyvar = undefined;
anyvar = null;

let num: number = 10;

//unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 10;
unknownVar = true;

if (typeof unknownVar === 'number') {
  num = unknownVar;
}
