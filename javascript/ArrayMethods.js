const arr = [];

for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

//function which accept function as an argument are higher order functions
let tempArr = arr.forEach((el, index) => el);

console.log("");
let tempArrMap = arr.map((el, index) => el);

// console.log(
//   "Array from for each ====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ",
//   tempArr
// );
// console.log(
//   "Array from map ====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ",
//   tempArrMap
// );
// let arrFilter = arr.filter((el, index) => el % 5 === 0);
// console.log(arrFilter);

// let arrPop = arr.pop();
// console.log(arrPop);
// console.log(arr);

let arrShift = arr.shift(0);
console.log(arrShift);
console.log(arr);

let arrUnShift = arr.unshift(2);
console.log(arrUnShift);
console.log(arr);
