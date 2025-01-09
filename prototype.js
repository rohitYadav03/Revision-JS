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
  
const obj1 = {
    name1: "Rohit"
}
const obj2 = {
    name2: "Roshan",
    __proto__: obj1
} 
console.log(obj2.name1); // now how have access name1 from name2??  => because now prototype of obj2 is obj1
 // obj2 -> obj1 -> Object.prototype -> null  => this will how protype chain willl look like of obj2



let x = 10; 
// console.log(x.__proto__); // here x is linked to number object and number object is linked to Object 





