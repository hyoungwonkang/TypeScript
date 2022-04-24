{
    //JavaScript 똥!
    function jsAdd(num1, num2) {
      return num1 + num2;
    }

    //TypeScript 빛!
    function add(num1: number, num2: number): number {
      return num1 + num2;
    }

    //JavaScript 똥!
    function jsFetchNum(id) {
      // code...
      // code...
      // code...
      return new Promise((resolve, reject) => {
        resolve(100);
      });
    }

    //TypeScript 빛!
    //안정적인 개발을 위한 static함을 사용. 문서화에 도움이 됨.
    function fetchNum(id: string): Promise<number> {
      // code...
      // code...
      // code...
      return new Promise((resolve, reject) => {
        resolve(100);
      });
    }

    // 자바 스크립트에서도 사용할 수 있고 타스에서 더 활용도를 높일 수 있는 타입이 더해진 함수 정의 방법
  //Optional parameter     //인자를 전달해도 되고 안해도 된다.        //이름을 출력할 수 있는 함수
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie"); // 인자 갯수와 정해진 타입으로 전해줘야 한다.
  //   printName("Anna", undefined);

  //Default Parameter
  function printMessage(message: string = "default message") {
    //타입 스크립트에서 default값 전달 가능.
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {       // ... (rest param)로 numbers라는 배열을 받아옴. number[]: 숫자타입의 배열.
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
