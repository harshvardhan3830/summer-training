// // functions are set of instructions

// //treditional function
function sumOfTwoNumbers(a, b) {
  return a + b;
}

// let sum = sumOfTwoNumbers(1, 3);
// console.log(sum);

// //arrow function

const sumOfThreeNumbers = (a, b, c) => {
  return a + b + c;
};

// sum = sumOfThreeNumbers(1,2,3);
// console.log(sum);

// console.log(sumOfTwoNumbers);

const sumOfTwoNUmbers = (a, b) => {
  return a + b;
};

let a = 3;
let b = 5;

const printSumOfTwoNUmbers = (a, b, method) => {
  return method(a, b);
};

let result = printSumOfTwoNUmbers(5, 7, sumOfTwoNUmbers);
console.log(result);

// first class citizen
// functions wich are accepted as arguments are called first call function/citizens