const BinaryDiagnostic = (list) => {
  const binary = {
    0: {
      0: 0,
      1: 0,
    },
    1: {
      0: 0,
      1: 0,
    },
    2: {
      0: 0,
      1: 0,
    },
    3: {
      0: 0,
      1: 0,
    },
    4: {
      0: 0,
      1: 0,
    },
    5: {
      0: 0,
      1: 0,
    },
    6: {
      0: 0,
      1: 0,
    },
    7: {
      0: 0,
      1: 0,
    },
    8: {
      0: 0,
      1: 0,
    },
    9: {
      0: 0,
      1: 0,
    },
    10: {
      0: 0,
      1: 0,
    },
    11: {
      0: 0,
      1: 0,
    },
  };

  list.forEach((number) => {
    for (let i = 0; i < number.length; i++) {
      binary[i][number[i]]++;
    }
  });

  let gamma = "";
  let epsilon = "";
  const values = Object.values(binary);

  values.forEach((value) => {
    value[0] > value[1]
      ? ((gamma += "0"), (epsilon += "1"))
      : ((gamma += "1"), (epsilon += "0"));
  });
  const result = parseInt(gamma, 2) * parseInt(epsilon, 2);
  return result;
};

let input = require("fs").readFileSync("input", "utf-8").split(/\r?\n/);
const r = BinaryDiagnostic(input);
console.log(r);
