console.log("loops & iterators");

// for and while

// for(intilization; termination condition; increment and decrement operators)
// for (let i = 0; i < 5; i++) {
//   console.log("Hello loops", i);
// }

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write("*");
//   }
//   console.log("");
// }

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let el in arr) {
//   console.log(el);
// }

arr.forEach((el) => {
    console.log(el);
  });
