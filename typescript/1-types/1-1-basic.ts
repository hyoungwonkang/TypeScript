{
  // Primitive: number, string, booolean, symbol, null, undefined
  // Object: function, Array

  //number
  const num: number = -5;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined      
  // let name: undefined;   
  // name='hello';      똥!
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
  // person = 1;           똥!
  let person2: string | null;

  //unknown       똥!    어떤것이 들어올지 모르겠어!
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any       똥!    어떤것이든 다 담을 수 있어!
  let anything: any = 0;
  anything = "hello";

  //void        비어있는 것 표현!
  function print(): void {      //: void 생략 가능
      console.log('hello');
      return;       // 리턴값이 없을 때 씀.
  }
  let unusable: void = undefined;   //  활용성이 없어 이렇게 선언하지 않는다!

  // never       절대 다른것을 리턴할 수 없다.   
  function throwError(message:string): never {
      //message -> server (log)
      throw new Error(message);
    while(true){}       //무한 루프
    // return 1;
  }
//   let neverEnding: never;         절대 사용하지 않음

  //object      똥!
  let obj: object
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'ellie'})
  acceptSomeObject({animal: 'dog'})

}