{
    //Discrimnated Union.

    
  type SuccessState = {
    result: "success"; // 동일한 result라는 key의 type은  문자열인 'success'와 'fail'을 준다.
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success", // 'fail'이라면 밑에는 reason으로 작성해 줘야겠죠!
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState): void {
    // state 즉 LoginState 타입에는 result는 success든 fail이든 다 들어있어서 result를 바로 보여준다.
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
  }
}

// 유니언을 사용할 때 공통적인 프로퍼티(result)를 가지고 있으므로서 구분하기 쉽게 만든다!!
