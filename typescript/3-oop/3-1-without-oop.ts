{
  //함수 타입 정의 합니다
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7; // 커피 한 샷 당 드는 커피 그램!   // number 없어도 inference로 숫자인것을 알수 있음. 하지만 이번엔 명시적으로 넣음.

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not Enough Coffee Beans!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      //   shots: shots, //키와 밸류의 이름이 동일하다면 생략이 가능합니다!
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
