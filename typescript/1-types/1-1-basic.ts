{
  /**
   *  JavaScript에서 쓰이는 큰 두 타입
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array......
   */

  //number
  const num: number = -5;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined
  // let name: undefined; 💩
  // name='hello';  💩
  let age: number | undefined; // '또는' 옵셔널 타입
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 찾으면 숫자, 없으면 undefined
    // return 1; //숫자를 리턴하거나
    return undefined; //undefined를 리턴합니다!
  }

  //null
  // let person: null; 💩
  // person = null;
  // person = 1;   💩
  let person2: string | null;

  //unknown   💩    어떤것이 들어올지 모르겠어!
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any   💩    어떤것이든 다 담을 수 있어!
  let anything: any = 0;
  anything = "hello";

  //void        비어있는 것 표현!
  function print(): void {
    //: void 생략 가능
    console.log("hello");
    return; // 리턴값이 없을 때 씀.
  }
  let unusable: void = undefined; //  변수에 void 선언은 활용성이 없어 이렇게 선언하지 않는다!

  // never       절대 다른것을 리턴할 수 없다.
  function throwError(message: string): never {
    //message -> server (log) 발생된 에러메세지를 서버로 보내서 로그를 남기고 어플리케이션에서 에러를 남길 수 있다.
    throw new Error(message);
    while (true) {} //Unreachable 무한 루프로 끝내지 않게 한다.
  }
  //   let neverEnding: never;         절대 사용하지 않음

  //object   💩 원시타입을 제외한 모든 객체타입은 가능. 그리하여 사용하지 않음.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
