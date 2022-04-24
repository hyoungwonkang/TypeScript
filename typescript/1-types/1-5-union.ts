{
  //Union Types : OR      //모든 가능한 케이스 중에 발생할 수 있는 것들 중 딱 하나의 타입을 만들고 싶을 때 .

  type Direction = "left" | "right" | "up" | "down"; // 위치 넣음
  function move(direction: Direction) {
    // direction이라는 인자는 Direction이라는 Type을 갖음.
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; //

  // type LoginCase = success:'res' | fail:'try again';
  // const login: LoginCase = success

  //function: login -> success, fail
  // Type을 먼저 정하고 함수 설정!!
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  // function loing(): SuccessState | FailState{

  type LoginState = SuccessState | FailState;
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
  // success -> 축하 body
  // fail -> 울음 reason

  // Type은 명시한 LoginState. state는 인자.
  function printLoginState(state: LoginState): void {
    //void 생략 가능
    if ("response" in state) {
      console.log(`축하 ${state.response.body}`);
    } else {
      console.log(`울음 ${state.reason}`); // 타스는 두개만 있는걸 알아서, 나머지 하나를 추천해준다.
    }
  }

  // type printLoginState(state:LoginState) = SuccessState | FailState;
  // function login (): printLoginState {
  //     return{
  //         response:{
  //             body: '축하'
  //         }
  //         console.log(response)
  //     }
  // }
}
