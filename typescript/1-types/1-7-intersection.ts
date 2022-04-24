{
  // Intersection Types: &
  //and 같은 개념.

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void; // 아무런 일을 하지 않고 인자도 없음.
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.work());
  }

  internWork({
    name: "ellie",
    score: 1, // 여기까지 작성했으면 student만 되므로 오류가 뜹니다!
    employeeId: 123,
    work: () => {}, //여기까지 작성했으면 인제 오류가 안뜨죠!
  });
}
