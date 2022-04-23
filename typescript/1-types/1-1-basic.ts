{
  // Primitive: number, string, booolean, symbol, null, undefined
  // Object: function, Array

  //number
  const num: number = -5;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefinde
  // let name: undefined;
  // name='hello';
  let age: number | undefined; // 옵셔널 타입
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 찾으면 숫자, 없으면 undefined
    return 1; //숫자를 리턴하거나
    // return undefined;       //undefined를 리턴합니다!
  }

  //null
  // let person: null;
  // person = null;
  // person = 1;
  let person2: string | null;

  //unknown       왠만하면 쓰지말기!
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any       왠만하면 쓰지말기!
  let anything: any = 0;
  anything = "hello";
}
