{
  /** Type Aliases
   */

  type Text = string;
  const name: Text = "luke"; //문자열만 정의 가능하게 됨
  const address: Text = "cananda";
  type Num = number; //숫자도 정의 가능함
  type Student = {
    //  객체도 정의 가능
    name: string;
    age: number;
  };
  const student: Student = {
    // 타입을 지정한 것들만 가능
    // animal: 'dog' //  타입 지정 안해서 안됨.
    name: "luke",
    age: 12,
  };

  /** String Literal Types
  타입을 문자열로 지정 가능함
  */

  type Name = "name";
  let lukeName: Name; //lukeName이라는 변수가 Name이라는 변수를 따라간다면
  lukeName = "name"; //name이라는 문자말고는 다른 문자를 따라 갈 수 없다.
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true; //true'값' 할당
  // const isCat: Boal = false  // isCat의 타입은 Boal이므로 true값 갖음. 그래서 false로 안됨.
}
