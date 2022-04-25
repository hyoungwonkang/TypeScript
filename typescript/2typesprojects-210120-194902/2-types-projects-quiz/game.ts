/**
 * Let's make a game 🕹
 */
const position = { x: 0, y: 0 };
type Motion = "up" | "down" | "left" | "right";
function move(motion: Motion) {
  switch (motion) {
    case "up":
      // return position.y=+1;        //여기서 바로 return 되지 않는다.
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      throw new Error(`unknown motion: ${motion}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
