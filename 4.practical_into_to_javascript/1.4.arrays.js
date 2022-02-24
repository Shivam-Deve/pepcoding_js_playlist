let arr1 = [1, "pepcoding", true, 9.5, null];
console.log(arr1);

// length
let len = arr1.length;
console.log(len);

// push
arr1.push("array");
console.log(arr1);

// unshift
arr1.unshift("javascript");
console.log(arr1);

// shift
arr1.shift();
console.log(arr1);

let x = arr1.pop();
console.log(x);

// slice
let newArr = arr1.slice(1, 3);
console.log(newArr);

// splice
arr1.splice(1, 2);
console.log(arr1);

// indexof
let idx = arr1.indexOf(1);
console.log(idx);

// contains
// let ifexist = arr1.includes("javascript");
// console.log(ifexist);