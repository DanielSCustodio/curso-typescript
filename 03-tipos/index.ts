let x:number = 2
const y:number = 10

let numbers: number[] = [1,2,3,52, x]
numbers.push(y)
console.log(numbers);

let nums: Array<number> = [2,5,6,8,39]
nums.push(...numbers)
console.log(nums);

