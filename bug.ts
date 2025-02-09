function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let x: number = 10;
let y: number = 5;

let sum = add(x, y);
console.log(sum); // Output: 15

let difference = subtract(x, y);
console.log(difference); // Output: 5

// The bug is that typescript compiler doesn't complain about missing return type even though the function is supposed to return a number. This can lead to unexpected behaviour at runtime.