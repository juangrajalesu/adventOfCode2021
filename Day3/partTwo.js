const BinaryDiagnostic = (list) => {
  return parseInt(countOxygen(list), 2) * parseInt(countCO2(list), 2);
};
const countOxygen = (list) => {
  let binary = {
    0: {
      0: [],
      1: [],
    },
    1: {
      0: [],
      1: [],
    },
    2: {
      0: [],
      1: [],
    },
    3: {
      0: [],
      1: [],
    },
    4: {
      0: [],
      1: [],
    },
    5: {
      0: [],
      1: [],
    },
    6: {
      0: [],
      1: [],
    },
    7: {
      0: [],
      1: [],
    },
    8: {
      0: [],
      1: [],
    },
    9: {
      0: [],
      1: [],
    },
    10: {
      0: [],
      1: [],
    },
    11: {
      0: [],
      1: [],
    },
  };
  let aux = [...list];
  let oxigen = "";
  let end = false;
  let index = 0;
  while (!end) {
    for (let item of aux) {
      binary[index][item[index]].push(item);
    }

    if (binary[index][1].length >= binary[index][0].length) {
      oxigen += "1";
      aux = binary[index][1];
    } else {
      oxigen += "0";
      aux = binary[index][0];
    }
    index++;
    if (index === 12) end = true;
  }

  return oxigen;
};

const countCO2 = (list) => {
  let binary = {
    0: {
      0: [],
      1: [],
    },
    1: {
      0: [],
      1: [],
    },
    2: {
      0: [],
      1: [],
    },
    3: {
      0: [],
      1: [],
    },
    4: {
      0: [],
      1: [],
    },
    5: {
      0: [],
      1: [],
    },
    6: {
      0: [],
      1: [],
    },
    7: {
      0: [],
      1: [],
    },
    8: {
      0: [],
      1: [],
    },
    9: {
      0: [],
      1: [],
    },
    10: {
      0: [],
      1: [],
    },
    11: {
      0: [],
      1: [],
    },
  };
  let aux = [...list];
  let oxigen = "";
  let end = false;
  let index = 0;
  while (!end) {
    for (let item of aux) {
      binary[index][item[index]].push(item);
    }

    if (binary[index][1].length + binary[index][0].length == 1) {
      oxigen += [...binary[index][1], ...binary[index][0]][0][index];
    } else {
      if (binary[index][0].length <= binary[index][1].length) {
        oxigen += "0";
        aux = binary[index][0];
      } else {
        oxigen += "1";
        aux = binary[index][1];
      }
    }
    index++;
    if (index === 12) end = true;
  }
  return oxigen;
};

let input = require("fs").readFileSync("input", "utf-8").split(/\r?\n/);
const r = BinaryDiagnostic(input);
console.log(r);
