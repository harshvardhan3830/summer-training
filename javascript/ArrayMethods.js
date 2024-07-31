const arr = [];

for(let i=1; i<= 20; i++){
    arr.push(i);
}

//function which accept function as an argument are higher order functions
arr.forEach((el, index) => {
    console.log(el)
})