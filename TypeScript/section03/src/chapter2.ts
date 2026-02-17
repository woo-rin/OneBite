// unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = '1';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

// Never 타입
function NeverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num1: number = neverFunc();
  let num2: string = neverFunc();
  let num3: boolean = neverFunc();
}

//void 타입

function voidExam() {
  function voidExam() {
    function voidFunc(): void {
      console.log('hi');
    }
  }

  let voidVar: void = undefined;
}

//any 타입
function anyExam() {
  let unKnownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let necerVar: never;

  anyVar = unKnownVar;

  undefinedVar = anyVar;

  //necerVar = anyVar;
}
