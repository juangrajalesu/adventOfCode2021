const checkDepth = (list) => {
  let position = [0, 0];
  let aim = 0;
  list.forEach((movement) => {
    const direction = movement.split(" ")[0];
    const cuantity = Number(movement.split(" ")[1]);
    if (direction == "forward") {
      position[0] += cuantity;
      position[1] += aim * cuantity;
    }
    if (direction == "up") aim -= cuantity;
    if (direction == "down") aim += cuantity;
  });
  return position[0] * position[1];
};

let input = require("fs").readFileSync("input", "utf-8").split(/\r?\n/);

const result = checkDepth(input);
console.log(result);
