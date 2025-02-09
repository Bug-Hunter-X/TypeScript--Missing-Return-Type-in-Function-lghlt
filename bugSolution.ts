function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return 0; // Handle division by zero
  }
  return a / b;
}

let x: number = 10;
let y: number = 5;
let z:number = 0;

let sum = add(x, y);
console.log(sum); // Output: 15

let difference = subtract(x, y);
console.log(difference); // Output: 5

let division = divide(x,y);
console.log(division); // Output: 2

let division2 = divide(x,z);
console.log(division2); // Output: 0