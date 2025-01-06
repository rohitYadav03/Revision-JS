// Question 1
// Create a function expression stored in a variable named greet that logs "Hello, World!" to the console. Call the function.

// const greet = function hello(){
//     console.log("Hello, World!");
    
// }

// greet();

// Question 2
// Create an anonymous function expression stored in a variable named calculateSum.
//  This function should take two numbers as parameters and return their sum.
//  Call the function with two numbers of your choice.

// const calculateSum = function (x , y) {
//   return x + y;
// }
// console.log(calculateSum(5,6));

// Question 3
// Create an arrow function expression stored in a variable named multiply. This function should take two numbers as parameters and return their product. Call the function with two numbers of your choice.

// const multiply = (a , b) => {
//    return a * b;
// }
// console.log(multiply(5,6));

// (function square (x) {
//  console.log(x*x);
 
// })(10);

// 2. Write an anonymous function expression stored in a variable add that takes two numbers as arguments and returns their sum. Test it by calling add(5, 10).

// const add = function (a, b) {
//     return a + b;
// }
// console.log(add(5,10));

// 3. Write a named function expression stored in a variable multiply that multiplies two numbers and returns the result. Call multiply(3, 4) and log the result.

// const multiply  = function mul (a,b){
//     return  a *b;
// }
// console.log(multiply(3, 4));

// 4. Use the map method with an anonymous function expression to double each number in the array [1, 2, 3, 4, 5]. Print the resulting array.

// let arr = [1, 2, 3, 4, 5];

// let res = function (array) {
//    let ans =  array.map((curElem) => {
//        return curElem*2;    
//    })
//    return ans
// }
// let finalAns = res(arr);
// console.log(finalAns);


// let res = function (array) {
//    return array.map((curElem) =>{
//       return curElem*2;
//    })
// } 
// console.log(res(arr));

// 5. Use the map method with a named function expression to triple each number in the array [2, 4, 6]. Print the resulting array.

// let arr = [2, 4, 6];
// let res = function triple(array){
//    return  array.map((curElem) => {
//        return curElem * 3;
//      })
// }
// let tripleVal = res(arr);
// console.log(tripleVal);

// 6. Create a function named isEven and pass it as an argument to the filter method to filter out even numbers from [1, 2, 3, 4, 5, 6]. Print the filtered array.

// let arr = [1, 2, 3, 4, 5, 6];
// function isEven (array) {
//  let ans =  array.filter((curElem) => {
//    return curElem%2 === 0;
//    })
//    return ans;
// }
// console.log(isEven(arr));

// 7. Write a function applyToEach that takes an array and a function as arguments and applies the function to each element in the array. Use it with a named function expression that squares numbers in [1, 2, 3, 4]

// function square(num){
//    return num * num;
// }

// let res = function applyToEach (array, fn){
//  return  array.map((curElem) => {
//   return fn(curElem)
//    })
// }
// let arr = [1, 2, 3, 4];

// let finalRes = res(arr, square);
// console.log(finalRes);

// 8. Implement a recursive named function expression to calculate the factorial of a number. Use it with the map method to find the factorials of numbers in [3, 4, 5]. Print the result.

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;  // Multiply result by the current number
//     }
//     return result;
//   }
  
//   let arr = [3, 4, 5];
  
//   let factorials = arr.map(factorial);  // Apply the factorial function to each element in the array
//   console.log(factorials);  // Output the result
  
// 9. Create a custom map function called customMap using a named function expression. Use it to multiply each number in [2, 4, 6] by 2.

// function customMap(array, callback) {
//    let result = [];
//    for(let i =0; i<array.length; i++){
//    result.push(callback(array[i], i, array)) ;
//    }
//    return result;
// }
// let arr = [1,2,3,4,5];
// function double(num){
//     return num *2;
// }
// let result1 = customMap(arr, function(num){
//     return num *3;
// })
// console.log(result1);

// let res2 = customMap(arr,double);
// console.log(res2);

// 10. Convert the following function expression into an arrow function:

// const greet = (name) => {
//     return `Hello, ${name}`;
//   };
//   console.log(greet("Rohit"));
  
// 11. Use an arrow function with the map method to calculate the square of each number in [3, 5, 7, 9].

// let arr = [3, 5, 7, 9];
// let res = arr.map((curElem) => {
//    return curElem*curElem;
// })
// console.log(res);

// 12. Write an arrow function stored in a variable isOdd that checks if a number is odd. Use it with the filter method to filter out odd numbers from [2, 3, 4, 5, 6].

// let arr = [2, 3, 4, 5, 6];
// let isOdd = (array) => {
//   return array.filter((curElem) => { // here the return keyword is use to return the filter array to isOdd variable
//    return curElem%2 === 0;  // here return keyword is use to filter which element to keep or which to not 
//    })
// }
// let res = isOdd(arr);
// console.log(res);


// 13. Write an IIFE to log "This is an IIFE" to the console.

// (function greet (){
//     console.log("This is an IIFE");
// })();

// 14. Use an IIFE to calculate and log the sum of two numbers (e.g., 5 and 10).

// (function sum (a, b) {
//    console.log(a + b);
// })(5,10);

// 15. Use an IIFE to return the largest number from [12, 45, 78, 34] and log it to the console.

let arr = [12, 45, 78, 34];
(function largest(array){
    let large = -Infinity;
    for(let i =0; i<array.length; i++){
        if(arr[i] > large){
            large = arr[i];
        }
    }
    console.log(large);
    
})(arr);











