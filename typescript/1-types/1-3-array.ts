{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // readonly를 사용하려면 string 다음에 배열 표시가 있는 문법이용.
    // 즉 불변성 때문에 꺽쇠 <>보다 string[]을 사용하는 경우가 더 많음.
  }
  //Tuple     //서로 다른 타입의 데이터를 배열에 담을 수 있음   //리액트에서 useState를 쓸 때 씁니다!
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 하지만 Tuple을 스면 인덱스를 읽어야 하는 가독성이 떨어짐.

  //object destructuring을 이용.
  const [name, age] = student; // student안에 첫번째 값이 name으로 두번째값이 age로 할당 됨.
}
