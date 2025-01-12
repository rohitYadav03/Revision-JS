// Closure => when function remember the variable of outer scope even after the outer function has finished executing 

// ---------QUESTION--------------------------------------------------
//Q1.
//  function greet(name){
//   return  function greetings(greeting,sym){
//   console.log(name,greeting,sym);
  
//     }
// }
// let result = greet("Rohit");
// result("welcome","!");

//Q2.
// function greet(name) {
//     return function greetings(greeting = "Hello", sym = "") {
//       return `${greeting} ${name}, have a great day${sym}`;
//     };
//   }
  
//   let result = greet("Rohit");
//   console.log(result()); // Outputs: "Hello Rohit, have a great day"
  
//   console.log(result("Welcome", "!")); // Outputs: "Welcome Rohit, have a great day!"
  
//Q3.
function createCounter(){
  let  count = 0;
    return function increse(){
     count++; 
      console.log(count);
      
    }
}
const counter = createCounter();
counter(); 
counter(); 
counter(); 

// modifed Q3.
function createCounter (){
    let count = 0
    return function op(operation){
        if(operation == "increment"){
          return  ++count;
        }
        else if(operation == "decrement"){
           return --count;
        }
        else{
            console.log("Invalid operation");
            
        }
    }
}
let res = createCounter();
console.log(res("decrement"));
