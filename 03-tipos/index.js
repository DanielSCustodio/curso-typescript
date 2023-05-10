"use strict";
let x = 2;
const y = 10;
let numbers = [1, 2, 3, 52, x];
numbers.push(y);
console.log(numbers);
let nums = [2, 5, 6, 8, 39];
nums.push(...numbers);
console.log(nums);
