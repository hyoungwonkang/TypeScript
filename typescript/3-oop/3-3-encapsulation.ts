{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private
  // protected

  // public  // 기본 따로 작성 안해도 됨. Coffeemaker.BEANS_GRAMM_PER_SHOT를 치면 추천이 보입니다.
  class CoffeeMaker {
    // public  // 기본. Coffeemaker.BEANS_GRAMM_PER_SHOT를 치면 추천이 보입니다.
    // public static BEANS_GRAMM_PER_SHOT: number = 7;
    // public coffeeBeans: number = 0;

    // private  // 가려짐. Coffeemaker.BEANS_GRAMM_PER_SHOT를 치면 추천이 안 보입니다. 즉 가려져 있어서 읽을 수가 없습니다.
    // private static BEANS_GRAMM_PER_SHOT: number = 7;
    // private coffeeBeans: number = 0;

    // protected // 이 CoffeeMaker 클래스를 상속한 다른 클래스 내에서는 접근이 가능합니다!
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    //constructor로 생성하는 것을 금지하기 위해 private을 붙입니다!
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //static을 붙여서 오브젝트를 만드는 이런 함수가 있다는 것을 알려준다!
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // 이것은 퍼블릭이이서 이 함수를 통해서 커피콩을 더 넣습니다!
    // 또한 전달받는 인자가 유효한지 안한지를 검사도 하므로 안정적입니다!
    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }
  // // new는 클래스의 인스턴스를 만드는것. ()괄호는 constructor를 호출하는것!
  //   const maker = new CoffeeMaker(32);

  // public을 사용 했을 때
  //   maker.coffeeBeans = 3;
  //외부에서 나의 오브젝트 상태를 유효하지 않은 상태로 만들 수 있습니다!
  //   maker.coffeeBeans = -34; //invalid

  // private을 사용하여서 이걸로 사용합니다.
  maker.fillCoffeBeans(32);

  //constructor가 private되어서 ()를 못씁니다!
  //CoffeeMaker 쓴 후 .을 눌러서 쓸 수 있는 함수 확인!
  const maker = CoffeeMaker.makeMachine(32);
}
