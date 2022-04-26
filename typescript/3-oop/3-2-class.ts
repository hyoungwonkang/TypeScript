{
  //함수 타입 정의 합니다
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //서로 관련있는 데이터나 함수들을 한 곳에 묶어 놓는 기능.
  // const, let, function같은 키워드를 사용하지 않습니다!
  class CoffeeMaker {
    // BEANS_GRAMM_PER_SHOT: number = 7; // 커피 한 샷 당 드는 커피 그램!   // number 없어도 inference로 숫자인것을 알수 있음. 하지만 이번엔 명시적으로 넣음.
    //static은 멤버변수 뿐만 아니라 함수에도 적용 할 수 있습니다!
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    coffeeBeans: number = 0; //instance (object) level

    //클래스를 가지고 오브젝트 인스턴스를 만들 때 쓰는 constructor
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //this는 클래스안의 coffeeBeans를 가리키므로 헷갈리지 않습니다!
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker{   //클래스 내부에 있는 어떠한 속성값도 필요하지 않기 때문에 static을 씁니다!
        return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      //   if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      //클래스 안에 변수를 쓴다는 뜻으로 this 붙여줘야 합니다.
      //   if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {    //static을 써서 클래스 안에 있는 this를 쓰지 않고 클래스 이름명을 써야 합니다!
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      //   this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32); // new는 클래스의 인스턴스를 만드는것. ()괄호는 constructor를 호출하는것!
  
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3) // 클래스 레벨에서 활용가능하려면 static 키워드를 붙여줘야 합니다!
}
