{
  /**
   * Type Assertions 똥!      //하지만 불가피하게 씀 Javascript와 연동하기 때문.
   */
  function jsStrFunc(): any {
    return "hello";
    // return 2;
  }
  const result = jsStrFunc();
  // result는 any type이기 때문에 문자열 타입에서 이용 가능한 API를 쓸 수 없습니다!
  // 하지만 문자열인것을 확신하고 있다면 Type Assertions을 쓸 수 있다.
  // 만약 문자열인것으로 확신했지만 return이 문자열이 아니면 undefined가 뜬다.
  // result.
  console.log((result as string).length); // 이렇게 사용합니다. length 말고도 다른 문자열 API 사용 가능!
  // console.log((<string>result).length)  // 변수앞에 해당 type을 꺽쇠에 넣어도 가능.

  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1));    //어플리케이션이 종료되고 type에러: wrong.push is not a function이 뜹니다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // numbers.push(2)       //배열일 수도 있지만 undefined일수도 있기에 push를 쓰는것이 잘못될 수 있다 경고함.
  // undefined일수도 있지만 나는 배열임을 확신하면 !를 씁니다! 절대적으로 값이 있다는 표시.
  numbers!.push(2);
  // const numbers = findNumbers()!;     // 함수 뒤에 !를 붙여도 같은 기능입니다!

  // type assertion에 대한 실제 사례.
  const button = document.querySelector("class");
  // button.nodeValue        //위와 마찬가지로 null도 가능하기 때문에 경고가 뜹니다!
  if (button) {
    //타스는 button이 true라는 것을 알아채고 블럭안에 있는 button에 있는 요소들에 접근이 가능합니다!
    button.nodeValue;
  }
}
