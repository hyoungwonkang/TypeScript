/**
 * Let's make a game ๐น
 */
const position = { x: 0, y: 0 };
type Motion = "up" | "down" | "left" | "right";
function move(motion: Motion) {
  switch (motion) {
    case "up":
      // return position.y=+1;        //์ฌ๊ธฐ์ ๋ฐ๋ก return ๋์ง ์๋๋ค.
      position.y += 1;
      break; //break๋ฅผ ํ์ง ์์ผ๋ฉด ๊ณ์ ๋ฐ์ ์๋ ์ผ์ด์ค๊น์ง ์คํ์ด ๋จ.
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
