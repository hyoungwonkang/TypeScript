{
  /**
   * Type Inference
   */

  let text = "hello"; // 자동으로 string type으로 유추합니다!
  // text =1; // string이 아니므로 오류가 납니다!
  text = "ellie"; // 재할당 가능!

  print("hello");
  print;

  // function print(message){        //type을 지정하지 않으면 any가 된다!
  // function print(message:string){     //string을 지정하거나
  function print(message = "hello") {
    // 자동으로 string으로 유추 합니다.
    console.log(message);
  }
  print("hello");

  //   function add(x: number , y:number){
  function add(x: number, y: number): number {
    return x + y; // x는 nubmer, y도 number로 추론 합니다!
  }

  const result = add(1, 2); //add라는 함수가 number를 쓰니 result 변수도 number를 추론합니다!

  //원시 타입은 너무나도 뻔하기 때문에 inference를 해주지만
  //함수는 안에 코드가 복잡하기 때문에 정확하게 type을 지정해 주는것이 좋다.
  //팀에서는 어떤 부분은 생략이 가능하고 어떤 부분은 정확하게 명시하는 것을 정확하게 정해야 합니다!
}
