// Higher-Order Functions (HOF) => these are those function which take 
//    one or more functions  as an argumment or return a function as its result
// Callback => function passed as an argument to another functionn


// -------------------Practice Questions: Callbacks and Higher-Order Functions---------------------------------------
//Q1. 
// function greetUser(name , Callback){
//  console.log(`Welcome ${name}`);
//  Callback()
// }
// function day(){
//     console.log("Enjoy your day!");
    
// }
// greetUser("Rohit", day)

//Q2. 
// function calculate(a, b, operation){
//  console.log(operation(a,b));
 
// }

// function add(c, d){
//     return c+ d;
// }
// function subtract(c, d){
//     return c - d;
// }
// calculate(10, 15, add);  
// calculate(10, 5, subtract);  
// Same for multiplication and division

//Q3.
// function logMessage(message, callback){
//     console.log(message);
//     callback();
// }
// function mycallback(){
//      console.log("Message logged successfully!");
     
// }
// logMessage("Hello, World!", mycallback);

//Q4.
// function repeat(n, sayHello){
//     for(let i =0; i<n ; i++){
//         sayHello();
//     }
// }
// function sayHello(){
//     console.log("hello everyone");
// }
// repeat(3, sayHello);

//Q5.
// function evenOnly (num){
//     return num%2 === 0;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// function filterArray(arr, condition){
//     let result = []
//     for(let i = 0; i<arr.length; i++){
//          if(condition(arr[i])){
//             result.push(arr[i]);
//          }
//     }
//     return result;
// }
// let finalArray = filterArray(arr,evenOnly);
// console.log(finalArray);

//Q6.
function mapArray(arr, callback){
     let result = [];
     for(let i =0; i<arr.length; i++){
       result.push(callback(arr[i]))
     }
     return result;
} // and i think this mapArray act as a map function only
function square(num) {
    return num * num;
}

console.log(mapArray([1, 2, 3, 4], square));  

