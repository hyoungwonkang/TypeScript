{
  /**
   * Enum
   */
  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2; //서로 관련은 있으나 묶을 수 있는 타입이 따로 존재하지 않습니다!
  //ENUM에 가깝게 표현할 수 있는 방법.
  // Object를 수정 할 수 없게 freeze라는 api를 써서 정으 ㅣ할 수 있음
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY; //상수 값들이 모여서 type이 보장되니 더 안전하게 쓸 수 있음. enum의 속성임.

  //TypeScript      //상수들을 묶을 수 있는 방법이 없다면 enum을 쓸 수 밖에 없다. 하지만
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // Union(OR) 타입을 쓸 수 있다.
  //그렇다고 enum을 아예 안 쓰는 것은 아니다. 모바일 클라이언트(안드로이드, IOS)는 Union을 안쓰므로 공통된 enum을 써서 소통할 수 있다.
  enum Days {
    // Monday = 1, // 값 지정 안하면 0부터 시작합니다!
    // Monday = "monday",  // 문자열도 지정 가능합니다!
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday; //day는 Days라는 것을 할당 받을 수 있는 타입.
  day = Days.Tuesday;
  day = 10; // 없는 값인데도 할당이 되버리고 또한 에러 메시지도 안뜸.
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday"; // DaysOfWeek 라는 타입을 쓰므로 값은 Monday, Tueseday, Wednesday로 됨.
  //   dayOfweek = 'ellie'       // 오류 뜸
  dayOfweek = "Monday";
}
