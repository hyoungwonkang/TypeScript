{
  //Union Types      //모든 가능한 케이스 중에 발생할 수 있는 것들 중 딱 하나의 타입을 만들고 싶을 때 .

  type Direction = "left" | "right" | "up" | "down"; // 위치 넣음
  function move(direction: Direction) {
    // direction이라는 인자는 Direction이라는 Type을 갖음.
    console.log(direction);
  }
  move('');  // 자동으로 인자를 보여줌(여기서는 스트링 리터럴들)

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = ; // 인자들은 넘버들

  //function: login -> success, fail // 이러한 함수를 만든 다면?
  // Type을 먼저 정하고 함수 설정!!
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  // function login(): SuccessState | FailState //이러한 결과를 원할 것입니다!

  type LoginState = SuccessState | FailState; // SuccessState와 FailState를 먼저 Union으로 설정합니다.

  // function login(id: string, password: string): Promise<LoginState> {      //일반적으로 LoginState가 아니라 네트워크통신을 하는 비동기로 해야하니 Promise를 쓴다.
  function login(): LoginState {
    //하지만 여기서는 배우느 단계이니 아직 LoginState만 씀.
    return {
      // 가령 성공했다면
      response: {
        body: "logged in!",
      },
    };
  }

  // 퀴즈. discriminated union을 쓰기 위한 전초 코드.
  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😭 reason

  // Type은 명시한 LoginState. state는 인자.
  function printLoginState(state: LoginState): void {
    //void 생략 가능
    if ("response" in state) {  //response라는 key가 state 안에 있다면
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`); // 타스는 두개만 있는걸 알아서, 나머지 하나를 적으면 된다.
    }
  }
}

//discrimination: 차별화되는 이름이 동일한 타입을 둬서 구분할 수 있는 것.
