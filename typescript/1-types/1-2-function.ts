{
  // 타입스크립트의 기본적인 함수에 타입 먹히기
  //JavaScript
  // function jsAdd(num1, num2){
  //   return num1 + num2;
  // }

  // function jsFetchNum(id){
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //TypeScript
  function tsAdd(num1: number, num2: number) {
    return num1 + num2;
  }

  function tsFetchNum(id: string): Promise<number> {
    //code...
    //code...
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // 옵셔널 파라미터
  // function printName(firstName: string, lastName: string | undefined) {   //정확하게 undefined로 적어야 한다.는 단점이 있다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Anna", undefined);
  printName("Luke");

  // 디폴트 파라미터
  function printMassage(message: string = "default message") {
    console.log(message);
  }
  printMassage();

  //Rest parameter 레스트 파라미터
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  console.log(addNumbers(1, 2));
}
