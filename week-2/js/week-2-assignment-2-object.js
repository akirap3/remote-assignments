// Try two ways to create a proper object as a parameter of calculate function

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

// First way - JSON format
const object1 = `
    [
        {
            "op": "+",
            "n1": 2,
            "n2": 3
        },
        {
            "op": "-",
            "n1": 10,
            "n2": 8
        },
        {
            "op": "*",
            "n1": 10,
            "n2": 8
        }
    ]

`;

const firstWayObject1 = JSON.parse(object1);
let firstWayResult1 = calculate(firstWayObject1[0]);
let firstWayResult2 = calculate(firstWayObject1[1]);
let firstWayResult3 = calculate(firstWayObject1[2]);

// Second way
class Calcaulation {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }
  get op() {}
}

class Add extends Calcaulation {
  get op() {
    return "+";
  }
}

class Subtract extends Calcaulation {
  get op() {
    return "-";
  }
}

class Multiply extends Calcaulation {
  get op() {
    return "*";
  }
}

const add_object = new Add(10, 2);
const subtract_object = new Subtract(9, 2);
const multiply_object = new Multiply(2, 11);

let sceondWayResult1 = calculate(add_object);
let sceondWayResult2 = calculate(subtract_object);
let sceondWayResult3 = calculate(multiply_object);

console.log(`
First way result1:\t${firstWayResult1}\n
First way result2:\t${firstWayResult2}\n
First way result3:\t${firstWayResult3}\n
Second way result1:\t${sceondWayResult1}\n
Second way result2:\t${sceondWayResult2}\n
Second way result3:\t${sceondWayResult3}
`);
