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
  // name='hello';  π©
  let age: number | undefined; // μ΅μλ νμ
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // μ°ΎμΌλ©΄ μ«μ, μμΌλ©΄ undefined
    return 1; //μ«μλ₯Ό λ¦¬ν΄νκ±°λ
    // return undefined;       //undefinedλ₯Ό λ¦¬ν΄ν©λλ€!
  }

  //null
  // let person: null;
  // person = null;
  // person = 1;   π©
  let person2: string | null;

  //unknown   π©    μ΄λ€κ²μ΄ λ€μ΄μ¬μ§ λͺ¨λ₯΄κ² μ΄!
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any   π©    μ΄λ€κ²μ΄λ  λ€ λ΄μ μ μμ΄!
  let anything: any = 0;
  anything = "hello";

  //void        λΉμ΄μλ κ² νν!
  function print(): void {
    //: void μλ΅ κ°λ₯
    console.log("hello");
    return; // λ¦¬ν΄κ°μ΄ μμ λ μ.
  }
  let unusable: void = undefined; //  νμ©μ±μ΄ μμ΄ μ΄λ κ² μ μΈνμ§ μλλ€!

  // never       μ λ λ€λ₯Έκ²μ λ¦¬ν΄ν  μ μλ€.
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {} //λ¬΄ν λ£¨νλ‘ λλ΄μ§ μκ² νλ€.
  }
  //   let neverEnding: never;         μ λ μ¬μ©νμ§ μμ

  //object   π© μμνμμ μ μΈν λͺ¨λ  κ°μ²΄νμμ κ°λ₯. κ·Έλ¦¬νμ¬ μ¬μ©νμ§ μμ.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
