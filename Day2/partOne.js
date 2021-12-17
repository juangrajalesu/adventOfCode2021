const checkDepth = (list) => {
  let position = [0, 0];
  list.forEach((movement) => {
    const direction = movement.split(" ")[0];
    const cuantity = Number(movement.split(" ")[1]);
    if (direction == "forward") position[0] += cuantity;
    if (direction == "up") position[1] -= cuantity;
    if (direction == "down") position[1] += cuantity;
  });
  return position[0] * position[1];
};

let input = require("fs").readFileSync("input", "utf-8").split(/\r?\n/);

const result = checkDepth(input);
console.log(result);
