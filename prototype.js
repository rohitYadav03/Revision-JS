// , prototype in js , __ptoto__, call , apply, bind  , Object.Crete, Super , prototyple inhertise 

// let p1 = {
//     fname : "Rohit",
//     lname: "Yadav"
// }
// console.log(p1);


// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   Person.prototype.calculateAge = function() {
//     let curYear = new Date.getFullYear ;
//   }
//   const rohit = new Person('Rohit', 1995);
  
//   console.log(rohit.calculateAge());  // Output: 30
  
    
// let date = new Date();
// let year = date.getFullYear();
// // console.log(year);

// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   Person.prototype.calculateAge = function (){
//     return year - this.birthYear;
//   }
//   const rohit = new Person('Rohit', 1995);
  
//   console.log(rohit.calculateAge());  // Output: 30
  
// const obj1 = {
//     name1: "Rohit"
// }
// const obj2 = {
//     name2: "Roshan",
//     __proto__: obj1
// } 
// console.log(obj2.name1); // now how have access name1 from name2??  => because now prototype of obj2 is obj1
 // obj2 -> obj1 -> Object.prototype -> null  => this will how protype chain willl look like of obj2



// let x = 10; 
// console.log(x.__proto__); // here x is linked to number object and number object is linked to Object 

// --------------------------QUESTION-----------------------------------------------------------------------------
// Q1. Basic Prototype Question
// Create a constructor function Person that takes name and age as parameters. Add a method greet() to the prototype that logs:
// "Hello, my name is [name] and I am [age] years old."

// function Person  (name,age){
//   this.name = name;
//   this.age = age;
// }
// Person .prototype.greet = function () {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      
// }

// let user1 = new Person("Rohit",22);
// user1.greet();

// Q2. Prototype Inheritance
// Create a constructor function Employee that inherits from the Person prototype.
// Add an additional method work() to the Employee prototype that logs:
// 👉 "I am working as a [role]".

// function Employee (name , age, role){
//     Person.call(this, name, age);
//     this.role = role;
// }
// Employee.prototype = Object.create(Person .prototype);
// Employee.prototype.work = function (){
//     console.log(`I am working as a ${this.role}`);
    
// }
// let emp1 = new Employee("Rohit",22,"Full Stack devloper");
// emp1.greet();
// emp1.work()

// Q3. Understanding __proto__
// const parent = { role: "Admin",
//     sayRole: function() {
//         console.log(`I am a ${this.role}`);
//       }
//  };
// const child = {
//     __proto__:parent
// };
// console.log(child.role);
// child.sayRole();

// 4. call 
// function introduce(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    
// }
// const obj1 = {
//     name: "Rohit",
//     age : 22
// }
// const obj2 = {
//     name: "Roshan",
//     age: 25
// }
// introduce.call(obj1);
// introduce.call(obj2);

// Q5. Understanding apply()
// function sum (a,b){
//    return a + b;
// }
// const number = {
//     a: 10,
//     b: 23
// }
// console.log(sum.apply(number,[number.a,number.b]));

//  Q6. Understanding bind()

// function multiply(a,b){
//     return a*b;
// }
// const multiplier  = {
//     factor: 2
// }
//   const double = multiply.bind(null, multiplier.factor);
// console.log(double(16));

// Q7:*** Implement Object.create() :-
// function myObjectCreate(proto){
//     const obj = {
       
//     }
//     obj.__proto__ = proto;
//     return obj;
// }
// const person = {
//     greet() {
//       console.log("Hello!");
//     },
//   };
  
//   const student = myObjectCreate(person);
//   student.greet(); 
  
// Q8. Basic call, apply, and bind Usage
// function introduce(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    
// }
// const person = {
//     name: "Rohit",
//     age: 25,
//   };
  
// introduce.call(person)
// introduce.apply(person)
// const res = introduce.bind(person);
// res()

// Q9: Difference Between call(), apply(), and bind()
// function addNumbers(a, b, c){
//     return a + b + c + this.x;
// }
// const obj = { x: 10 };
// console.log(addNumbers.call(obj, 1, 2, 3));

//Q10. Real-World Use Case of bind()

// const counter = {
//     count: 0,
//     increment: function (){
//        this.count++;
//        console.log(this.count);
//     }
// }

// const incrementFn = counter.increment.bind(counter);
// incrementFn();
// incrementFn()

function multiply(a, b, c) {
    return a * b * c;
  }
console.log(multiply.call(null,5,5,5));
console.log(multiply.apply(null,[2,2,2]));


