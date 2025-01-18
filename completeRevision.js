// Datatype => 1. Primitive 2. nonPrimitive => 1.ARRAY 2.OBJECT 3. A date
  // 1.Primitive
  let num = 10; // number 
  let name3 = "Rohit"; //string
  let person1 = true; // boolen
  let num2 = null; //null
  let secondName; //undefined
  let bigNum = 294848585959595933929292920n; //bigint
  // symbol

  //Truthy and falsy value =>
    // 1. Truthy value => condintion true , non empty string , array , object , not zero
    // 2. falsy value => condition false , empty string , 0, null ,undefine , -0,

    //TYPES OF OPERATOR => 1.assignment 2.arithmetic 3.logical , 4.comparsion 5.conditional

    //control statement and loops => 1. If/Else 2.Switch 3.for 4. while 5. do While  6.for In / for Of

    // Array => array and its build in methods 
    let arr2 = [2,3,4,5,6,7];
    for(let rohit in arr2){ // array are iterable we can use for of and for in loop in it
        // console.log(rohit);
        
    }
// let arr = [1,2,3,4,5]; // creting array
// console.log(arr[1]); // aceess in array
//  arr[1] = 22; // modifiy in array

 // forEach example in array => useful for performing action on each elemnt of the array 11
// let arr3 = [2,4,5,6,7,8];
// arr3.forEach((curElem) => {
//     console.log(curElem*2);
    
// })

// map => it crete a new array and return the value , but i does not change the orgignal array and it can be chain
      // because it return new array 
// let newArr = arr3.map((curElem) => {
//    return curElem*5
    
// })
// console.log(newArr);

//  CRUD IN Array 
// 1.PUSH  => add element in the last
// 2.pop => delete last element 
// 3. unshift => add to first 
// 4. shift => add element to last 
// 5. splice => can doo all splice(start , no.of element to delete , add) => syntax

// arr3.push(15);
// console.log(arr3);
// arr3.pop()
// // console.log(arr3);
// arr3.unshift(21);
// console.log(arr3);

// arr3.shift()
// console.log(arr3);

// let arr3 = [2,4,5,6,7,8];
// arr3.splice(2,1,98)
// console.log(arr3);

// serching in array => 1. indexOf  2. lastIndexOf  3.includes

// console.log(arr.indexOf(12)); //=> return index of first matching element or -1
// console.log(arr.lastIndexOf(2));  //=> return index of last matching element or -1 , serch backward
// console.log(arr.includes(2));  // if element is present then it returns true else false

// Filter in Array => fully similer to map
// 1.find => return first element or undefined
//  2.findIndex => retun first matching index or -1
//  3.filter => return new array with filter array 

// 1.find => return first element or undefined
let arr = [1,2,3,2,5];
// let ans = arr.find((num) =>{
//   return num > 2;
// })
// console.log(ans);

//  2. findIndex => retun first matching index
// let ans = arr.findIndex((num) =>{
//   return num > 2;
// })
// console.log(ans);

// //  3.filter
// let newArr = arr.filter((num) => {
//   return num > 2
// })
// console.log(newArr);

//Other Useful Methods =>
// 1.sort 2.compare 3.reduce 4.concat 5.sort  6.reverse

//  1.sort => Sorts elements alphabetically by default 
let fruits = ["Banana", "Apple", "Mango", "Cherry"];
fruits.sort();
// console.log(fruits); 
// Output: [ 'Apple', 'Banana', 'Cherry', 'Mango' ] (Sorted alphabetically)

// 2. Reduce => reduce array to single value 
// Used for calculating totals, summing values, or combining elements.
// Takes a callback function with two arguments: accumulator and current value.

let sum = arr.reduce((accumulator, num) => {
  return accumulator + num
},0)
// console.log(sum);

//3.concat () => Merges two or more arrays into a new array without modifying the originals.
let newArr = arr.concat(arr2)

// console.log(newArr);

//4.reverse() - Reverse an Array
// arr.reverse();
// console.log(arr);


// --------------Array complete-------------------------------------------------

//String => 
  let myName = "ROhit yadav";
// console.log(myName[1]); // we can access string using index number 

//serching in string => 
  // 1.serch => give index number or -1 
// console.log(myName.search('t'));
  //  2.match =>
  //  3.matchAll 4. startswith 5.endswith

  // other useful method 
  // 1.toLocaleLowerCase() => convert to lower case , but rember to store in a variable
 let res =  myName.toLocaleLowerCase()
// console.log(res);

// 2. toLocaleUpperCase() =>
// console.log(myName.toLocaleUpperCase());

// 3.trim() => removes space from start and ends of a string
// console.log(myName);

// console.log(myName.trim());

// 4.join() => convert an array into a string by joining all elements 
// let arr1 = [1,2,3,"hello"];
// console.log(arr1.join());

//5. split () => convert string into array
  // console.log(myName.split("")); => Each letter is now an array element!
  // console.log(myName.split(" ")); // Useful for breaking words into an array!
  
// --------------------string compplete -----------------------------------------------------------

//Function in JS => 

  // 1. function create => we use function keyword to create function in js
// function greet(){
//   console.log("hello world");
  
// }
// 2. function call => to call just write name of the function followed by ()
// greet();

// 3. function parameter and argument 
// Parameters => Parameters are placeholders for values that a function expects to receive.
// Arguments => Arguments are the actual values passed to a function when calling it.

// 4. function expression => does not start with function keyword as the first word
  //  (i) => named function expression 
  // let greet = function hello(){
  //   console.log("hello world");
    
  // }
  // greet()
  // (ii) => anonymous function expression
  // let greet = function (){
  //   console.log("hello world");
    
  // }
  // greet()
  // (iii) => aarow function 
  // let greet =  () => {
  //     console.log("hello world");
      
  //   }
  //   greet() 
  // (iv) => IIFE => 
    // (function nm(name){
    //   console.log(name);
      
    // })("Rohit");
    
// ---------------------------function complete here ----------------------------------------

// JS Code execution 

// JS execute the code in 2 phase 
// phase 1 => complilation and scope resolution 
// this happen before the code is executed , JS scans the code peform scope resolution and then hositing happen
// phase 1 Error => syntax error , missing bracket => nothing will run

// phase 2  => after succeful complition in phase 1 js start executing line by line


// Scope in JS 
// 1. Global scope => variable accessible every where 
// function scope => variable accesable anuwhere inside the function, can only be declared by var
// 3. block scope => only declare with let and const 

// Lexical Sxoping / Lexiccal parsing =
// JS use lexical scoping in which 

// function can access variable form their parent scope
// Parent function canoot access variable from child function
// scope chain is followed by  local to global 

// Scoping Machanism in JS => 
  // JS look for variable in the cuurent scope ,
  //  if not found it checks parent scope , up to global scope

  // => lexical scoping makes code predicatable and enable feature like clouser

  // TDZ => variable declare with let and const and the region before it was declare 

  // hoisting => when JS seems like it nows about variable or function before declartion
  // it happen because in phase 1 js reads all the variable function declration and set the memory to them ,
  //  so while executing we can call the function before declartion.
// say()
//   function say(){
//     console.log("hello");
    
//   }

// hoisting with var => var declare variable are hoisted and intiazed with undefined , and it does not give error
// console.log(hii);
// var hii = 12;

// let and const are hoisted but not inzitellied they remain in TDZ untill they are declare and accessing them before initalization will give you a error

// ---------------------------CLASSES AND OBJECT  STARTED -------------------------------------------------------------------------
// Class => are the blueprint for creting objects 
// it define stucture and behaviour of  a class 

class Product{
  constructor(name , price){
  this.name = name;
  this.price = price;
  }
  get getPrice(){
    console.log(this.price);
    
  }
  set setPrice(num){
    if(num > 0){
      this.price = num;
    }
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and Price is  ${this.price} .`);
  }
}
let obj1 = new Product("Realme",15000);
// console.log(obj1);

// obj1.getPrice;
obj1.setPrice = 10000;
// console.log(obj1);

// ing getters and setters using get and set allows you to access and assign 
// values without parentheses because they act as properties, not methods.

// we can make class private by using # before class member or Data member

// Constructor in JavaScript Class
// A constructor is a special method that is called automatically when an instance (object) of a class is created.
//  It is used to initialize the object's properties or perform any setup tasks needed when the object is created.

// we can crete object by using new keyword

// How new works => it works in 4 steps
// 1. new crete new empty object 
// 2. Constructor is automatticaly called and this refer to the new object
// 3. prototype setup happen
// 4. new object is automatticaly retirn if you dont manullay return any object 


// before the function constructor we were using function constructor
function Product2(name, price){
  this.name = name;
  this.price = price;
}
let pr1 = new Product2("Iphone",10000);
// console.log(pr1);

// by this we were creting object before

// Object in JS => collection of key value pair 
// function inside object are know as method 
let obj = {
  name: "Rohit",
  age : 22,
  fn : function hello(){
       console.log("hiii");
       
       }
}
// console.log(obj.name); => we can access and modify object using dot notation
obj.name = "Mota";
// console.log(obj);
// console.log(obj["age"]); and square bracket

// delete obj.age; => using delete keyword we can delete the and key of the object 
// console.log(obj);
 
// obj.fn(); // access method inside ibject 

//*Importand build in method in Object 
// 1.Object.keys(objectName) => give array containng all key
// console.log(Object.keys(obj));

// 2.Object.values(ObjectName) => array containg value
// console.log(Object.values(obj));

//3.Object.entries(obj) => array containing of key value pair
// console.log(Object.entries(obj));

//4. Object.freeze => makes object completyle immutable , cannot add , delete , or modify
  // Object.freeze(obj);
  obj.name = "Rvi"; // nothing will work because now object is completly immutable
  // console.log(obj);

//5. Object.seal => cannot add or remove but you can modify
  Object.seal(obj);
  delete obj.age; // this will not work
  obj.name = "Rbi";
  // console.log(obj); // this will work
  
//6. Object.preventExtension() => stops adding new propety/key to object
//7. Object.definePropety() => give full control to indivual propety => writable : false => cannot update the value
                                                                        // configurable: false => cannot delete or modify the value 

//Q. make your coustom O=freeze and seal

// ----------------------------------Object Destructing--------------------------------------------------------------
const person = {
  name: "Rohit",
  age: 22
};
// 1. Basic Destructing => Extract propety of a object into a varaible 
// const{name, age} = person; // example of basic destucting where the object value are stored in a variable 
        // thing to remberr there is the varibale name should be same as object key name
// console.log(name);
// console.log(age);

// 2. Aliasing =>  same as basic but here you can use diifernt  name instead of same variable name
// const{name: myFName, age} = person
// console.log(myFName);
//  console.log(age);
  
// 3. Nested Objet =>  we can destructure nested object also
  const user = {
    name: "Rohit",
    address: {
      city: "Delhi",
      country: "India"
    }
  };
const {address:{city, country}} = user
// console.log(city);
//   console.log(country);


// 4. defual variable => If a property is missing in the object, you can assign a default value.
// const{name,age , salary = 10000} = person;
// console.log(salary);

// 5. spread operator => merge two object or clone object into variable
// const newObject = {...user,...person};
// console.log(newObject);



// 6. rest operator => use to get the remaining properties of a object in a variable.
const{name:myLname,...otherDetails} = user;
// console.log(myLname);
// console.log(otherDetails);

// ---------------------this Keyword-------------------------------------------------------
// IN regular function this refer to call site , which help to invoke the this keyword
// arrow function does not have their own this, so it is solved lexically


//---------------------PROTOTYPE IN JS----------------------------------------------------------

// 1️⃣ JavaScript Prototype
// In JavaScript, every object has an internal property called [[Prototype]], which allows objects to inherit properties and methods
//  from another object. This is known as prototype inheritance.

// __proto__ => is a internal propety which points to the prototype of the object 

// Understanding Prototype Chain
// user1.__proto__  === Person.prototype => here user1 is creted by new keyword and person can be class or function constructor
// Person.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null  // End of chain

// How JavaScript Finds a Property or Method
// 1️⃣ First, it looks in the object's own properties.

// If found, it uses it. ✅
// 2️⃣ If not found, it looks in the object's prototype (__proto__).
// This means it checks the constructor’s prototype property. 🧐
// 3️⃣ If still not found, it moves up to Object.prototype.
// Almost all objects inherit from Object.prototype.
// 4️⃣ If not found in Object.prototype, it returns undefined.
// Because Object.prototype.__proto__ === null, this is where the lookup stops.

// ----------------------call , bind , apply------------------------------------------------

// 1. call => call() executes the function immediately and allows us to specify the this value.
// Arguments are passed individually (comma-separated).

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, my name is ${this.name}${punctuation}`);
// }

// const person = { name: "Alice" };

// greet.call(person, "Hello", "!"); // Output: Hello, my name is Alice!

// 2. apply () => same as call but take argument in array
// greet.apply(person, ["Hi", "?"]); // Output: Hi, my name is Alice?

//3. Bind => bind() does NOT execute the function immediately.
// Instead, it returns a new function with this permanently set to the specified object

// const greetAlice = greet.bind(person, "Hey", "!!!");
// greetAlice(); // Output: Hey, my name is Alice!!!

// ---------------------------HOW JS WORKS -------------------------------------------
// Step-by-Step Breakdown:
// 1.Global Execution Context is created.
// 2. Creation Phase of GEC:
// Variables (console, setTimeout, Promise) are hoisted.
// this is set to window.
// 3. Execution Phase of GEC:
// console.log("Start") is executed: "Start" is printed.
// setTimeout() is called and placed in the Task Queue (with a 0ms delay).
// Promise.resolve().then() is called and placed in the Microtask Queue.
// console.log("End") is executed: "End" is printed.
// 4. Now the Call Stack is empty, so the Event Loop starts checking the Microtask Queue.
// The Microtask Queue is processed first: "Microtask 1" is printed.
// 5. Finally, the Event Loop moves to the Task Queue and executes Task 1: "Task 1" is printed.

// ------------------ADVANCE JS PART------------------------------------------------------------------
// 1.Closures => A function inside another function that can access the outer function's variables even after the outer function is done.

// 2.Higher order function =>  function that takes another function as an argument. map , filter , reduce

//3.callback => function passes as an argument to another function
// problem of callback => 1.Callback Hell 2.Inversion of Control

// 4. Promise => 

//   🔹 What is a Promise?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous operations in JavaScript.

// 🔹 States of a Promise
// Pending: The promise is still being processed (neither fulfilled nor rejected).
// Fulfilled: The promise has been completed successfully (resolved).
// Rejected: The promise has failed or encountered an error.
// 🔹 How to Create a Promise
// You create a promise using the new Promise() constructor. It takes a function with two parameters: resolve (for success) and reject (for failure).

// javascript
// Copy
// Edit
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;  // Simulate success or failure
  
//   if (success) {
//     resolve("Task completed successfully!");  // Promise fulfilled
//   } else {
//     reject("Task failed!");  // Promise rejected
//   }
// });
// 🔹 How to Consume a Promise
// You can consume the promise using then(), catch(), or finally() methods.

// 1. Using then(): To handle a fulfilled promise.
// javascript
// Copy
// Edit
// myPromise.then(result => {
//   console.log(result);  // Output: Task completed successfully!
// });
// 2. Using catch(): To handle a rejected promise.
// javascript
// Copy
// Edit
// myPromise.catch(error => {
//   console.log(error);  // Output: Task failed!
// });
// 3. Using finally(): To run code regardless of the promise's outcome.
// javascript
// Copy
// Edit
// myPromise.finally(() => {
//   console.log("Promise is settled (either fulfilled or rejected).");
// });
// 🔹 Chaining Promises
// You can chain multiple .then() methods to handle sequential asynchronous operations.

// javascript
// Copy
// Edit
// let myPromise = new Promise((resolve, reject) => {
//   resolve(10);  // Fulfilled with value 10
// });

// myPromise
//   .then(result => result + 5)  // 10 + 5 = 15
//   .then(result => result * 2)  // 15 * 2 = 30
//   .then(result => console.log(result));  // Output: 30
// 🔹 Common Promise Methods
// 1. then()
// Used to handle fulfilled promises.

// javascript
// Copy
// Edit
// promise.then(onFulfilled, onRejected);
// 2. catch()
// Used to handle rejected promises.

// javascript
// Copy
// Edit
// promise.catch(onRejected);
// 3. finally()
// Executes code once the promise is settled, no matter if it's fulfilled or rejected.

// javascript
// Copy
// Edit
// promise.finally(() => {
//   console.log("Clean-up or final tasks");
// });
// 4. Promise.all()
// Used to execute multiple promises simultaneously and wait for all of them to resolve.

// javascript
// Copy
// Edit
// let promise1 = Promise.resolve(5);
// let promise2 = Promise.resolve(10);

// Promise.all([promise1, promise2])
//   .then(results => console.log(results));  // Output: [5, 10]
// 5. Promise.race()
// Returns the result of the first promise to settle (either fulfilled or rejected).

// javascript
// Copy
// Edit
// let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'First'));
// let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Second'));

// Promise.race([promise1, promise2])
//   .then(result => console.log(result));  // Output: First (first to resolve)

//Async await => 
  
//   What is Async/Await?
// async and await are extensions of promises that simplify working with asynchronous code.
// async makes a function return a promise.
// await is used inside async functions to pause the execution until a promise is resolved.
// 🔹 How to Use Async/Await
// Define an async function using the async keyword.
// Use await inside the async function to wait for a promise to resolve.
// Basic Example:
// javascript
// Copy
// Edit
// // Function that returns a promise
// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data fetched"), 2000);
//   });
// }

// // Async function
// async function getData() {
//   console.log("Fetching data...");
//   const result = await fetchData();  // Wait for the promise to resolve
//   console.log(result);  // Output: Data fetched
// }

// getData();
// 🔹 How Async/Await Works Under the Hood
// Async functions always return a promise. If a value is returned, it is wrapped in a resolved promise.
// Await pauses the execution of the async function until the promise is resolved (or rejected).
// When the promise is resolved, the execution of the function continues with the resolved value.
// If the promise is rejected, an error is thrown (which can be caught using try/catch).
// 🔹 Error Handling in Async/Await
// You can handle errors in an async function using try/catch blocks.
// Example:
// javascript
// Copy
// Edit
// async function fetchData() {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);  // Handle the error
//   }
// }

// fetchData();
// If any error occurs inside the async function, it will be caught by the catch block.
// 🔹 The fetch() API
// The fetch() API is used to make HTTP requests and returns a Promise.

// What does fetch() return?
// It returns a Promise that resolves to the Response object, which contains the response data.
// Basic Usage:
// javascript
// Copy
// Edit
// fetch('https://api.example.com/data')
//   .then(response => response.json())  // Parse the response as JSON
//   .then(data => console.log(data))
//   .catch(error => console.log(error));  // Handle errors
// What is inside the Response object?
// response.ok: Returns true if the response status is 200-299.
// response.json(): A method to parse the response body as JSON.
// response.text(): A method to parse the response body as plain text.
// 🔹 Key Takeaways
// async makes a function return a promise, and await pauses the function until the promise is resolved.
// Error handling is done using try/catch blocks inside async functions.
// fetch() is used to make HTTP requests and returns a Promise that resolves to the Response object.
// response.json() parses the response as JSON data, and response.text() parses it as text