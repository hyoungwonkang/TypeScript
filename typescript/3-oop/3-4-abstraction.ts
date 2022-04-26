{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //interface는 계약서 같은것.
  // 사용시 추상화를 극대화 할 수 있다.
  // class와 이름이 겹치면 class 이름을 바꿔주는 것이 좋다. 왜냐믄 interface는 외부적으로 사용하기 때문에
  // 헷갈리게 쓰면 안된다. 가령 ICoffeeMaker는 별로 좋지 않다(엘리)
  // 그리하여 class 이름을 CoffeeMachine으로 변경!
  interface CoffeeMaker{
      makeCoffee(shots: number): CoffeeCup;
  }
  // interface를 구현하도록 implements를 설정 합니다!
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up...");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
//   const maker = CoffeeMachine.makeMachine(32);
  //maker.를 찍어보면 수많은 함수중 어떤것을 먼저 해야하는지 모른다.
  // 그래서 abstraction을 해서 간단하게 만든다.
  // 첫번째 방법은 encapsulation을 이용하는것. 즉 가리고 싶은 함수에 private 키워드를 넣어준다.
  // 두번째 방법은 interface.

  //maker의 타입은 CoffeMachine이 될 수 있다!
  const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeBeans(32);
  maker.makeCoffee(2);

  //인터페이스를 이용하면 내가 얼마만큼의 행동을 보장(허용)할 건지 결정할 수 있다.
  const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeBeans(32);
  maker2.makeCoffee(2);
  

}
