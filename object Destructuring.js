// const product = {name: "Oppo A15", Price:10000, year: 2020};
// const {name,Price,year} = product;
// console.log(name);
// console.log(Price);
// console.log(year);

// console.log(product);
// const {Price, year} = product;
// console.log(Price);
// console.log(year);
// here the key name and variable name must be same otherwise it will give undefine;

//  what if we want to give another variable name expect the key name 
// is there is any other method ? => yes using aliases Name => means second name or addition name

// const {name , Price} = product;
// console.log(ProductName);
// const {discont = 10} = product;
// console.log(discont);
// console.log(product);

// console.log(name,Price);
// ---------------------------------------------
// Object destructring is a way to unpack vlues from an object and assign them into a indivual variable;
// const product = {name: "Rohit", surName:"Yadav", DOB:2003,studentClass: 12};

// console.log(name); => Rohit
// const userName = product.name;
// console.log(userName);

// const {UserName, surName,DOB} = product;
// console.log(UserName); // this will give undefine beacuse , The variable name must match the object key, if it does not match then it will give undefine 
// console.log(surName);

// const {name :UserName , surName,DOB} = product;
// console.log(UserName); // Aliaese => second Name 
// extract name propety from the product object  , and assign its value to to a new variable UserName;
//  The : in destructuring syntax is used to rename the variable.
// Destructuring is commonly used for cleaner and more readable code.

// Partial Destructing ;
// const {DOB: dateOfBirth = 2000} = product;
// console.log(dateOfBirth);

// Defult value  
// const {studentClass = 10} = product;
// console.log(studentClass);
//  2. 
// const {studentClass = 10} = product;
// console.log(studentClass);

// 6. Nested Object => in nested destructing always use : to go inside and to that one which you want to access
// let car = {
//     name: "TATA",
//     mfg : `05/10/2023`,
//     model:{
//        name: "PUNCH",
//        engine: {
//         speed:` 200"km/hr"`
//        }
//     }
// }

// const vechialSpeed = car.model.engine.speed;
// console.log(vechialSpeed);

// const {model {engine{speed }}} = car; incorrect way always use : in nested destureuing
// const { model: { engine: { speed: vechialSpeed } } } = car; // ✅ Correct
// console.log(vechialSpeed);

// const {
//     model:
//         engine: { speed: vechialSpeed}
//     }
// } = car;
// console.log(vechialSpeed);

// 7. Spread Operator for Object => The spread operator ... can combine or clone objects:
// const product = {name: "Rohit", surName:"Yadav", DOB:2003,studentClass: 12};
// const clone = {... product}; => product object is now cloned in clone variable
// console.log(clone);

// let car = { name: "TATA",  mfg : `05/10/2023`};

// let combine = {...car,...product};
// console.log(combine); => to combine two differnt object using spread operator use , after first object 

// let newCombine = {...combine, color: "BlacKMamal"};
// console.log(newCombine);  => addding using spread opertor in existing object 

// Rest Parameter => 
//     const user = { name: "John", age: 30, city: "New York", country: "USA" };

// const { name, age, ...other } = user;

// console.log(name); // "John"
// console.log(age);  // 30
// console.log(other); // { city: "New York", country: "USA" }

// Collect Remaining Properties: The rest operator gathers all properties that are not explicitly destructured.
// Creates a New Object: The rest variable contains a shallow copy of the remaining properties.

// const product = {name: "Rohit", surName:"Yadav", DOB:2003,studentClass: 12};
// const {DOB,...others} = product;
// console.log(DOB);
// console.log(others);


// ------Array Destructuring : arrays are objects in JavaScript.------------------------
 

// let arr = [1,2,3];
// console.log(typeof(arr)); => this will give object because , Arrays are objects in JavaScript because they inherit from the base Object 

// const marks = [27,32,43,24];
// const [english,hindi,math,science] = marks;
// console.log(science);

// Practice Questions : object 
//1. Destructure the product object to extract name and category into separate variables.
//2. Rename the price key to productPrice during destructuring.

// const product = {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics",
//   };
  
// const {name , category,price: productPrice} = product;
// console.log(name , category, productPrice);


//3. Destructure a nested object to extract categoryId in one step:
// const product = {
//     name: "Laptop",
//     specs: {
//       ram: "16GB",
//       processor: "Intel",
//       categoryId: 101,
//     },
//   };
  
// const {specs: {categoryId}} = product;
// console.log(categoryId);
 
// Question 4: Use the spread operator to combine the following two objects into one:

// const product = {
//     name: "Laptop",
//     price: 1200,
//   };
  
//   const details = {
//     category: "Electronics",
//     brand: "BrandName",
//   };
  
// const combine = {...product, ...details};
// console.log(combine);

// Question 5: Provide a default value for discount while destructuring the product object. If discount is not available, set it to 10.

const product = {
    name: "Laptop",
    price: 1200,
  };
const {discount = 10} = product;
// console.log(discount);

// Question 6: Destructure an array to extract the first and second elements, and leave the rest in a new variable called remaining.

// const scores = [90, 85, 78, 92, 88];
// const [first, second, ...rest] = scores;
// console.log(first,second,rest);

// Question 7: Use the rest parameter to create a function that accepts an indefinite number of arguments and returns their sum.
// function sum(...rest) {
//       return rest.reduce((total,sum) => total + sum,0)
//   }
//  let res =  sum(1,2,3,4,5,6)
// console.log(res);

// --------------------------------------NOTES-----------------------------------------------------------------------

// Object Destructuring:
// Basic Destructuring: Extract properties from an object into variables.

// javascript
// Copy code
// const product = {name: "Laptop", price: 1200};
// const {name, price} = product; // name = "Laptop", price = 1200
// Aliasing: Assign a property value to a variable with a different name.

// javascript
// Copy code
// const {name: productName, price: productPrice} = product; // productName = "Laptop", productPrice = 1200
// Nested Object Destructuring: Extract values from a nested object.

// javascript
// Copy code
// const product = {name: "Laptop", specs: {ram: "16GB", processor: "Intel", categoryId: 101}};
// const {specs: {categoryId}} = product; // categoryId = 101
// Default Values: Provide a default value for a property if it’s not present in the object.

// javascript
// Copy code
// const {discount = 10} = product; // discount = 10 if no discount is present
// Using Spread Operator: Merge or clone objects.

// javascript
// Copy code
// const combined = {...product, ...details}; // Combine objects
// const clone = {...product}; // Clone object
// Array Destructuring:
// Basic Array Destructuring: Extract values from an array into variables.

// javascript
// Copy code
// const scores = [90, 85, 78];
// const [first, second, third] = scores; // first = 90, second = 85, third = 78
// Using Rest Parameter: Collect remaining values into a new array.

// javascript
// Copy code
// const [first, second, ...rest] = scores; // first = 90, second = 85, rest = [78]
// Rest Parameter:
// In Functions: Gather all arguments into an array.
// javascript
// Copy code
// function sum(...args) { return args.reduce((total, num) => total + num, 0); }
// console.log(sum(1, 2, 3)); // 6
// Key Points to Remember:
// Object Destructuring is useful for unpacking key-value pairs.
// Array Destructuring works with sequential values, and order matters.
// Rest: Use ... to gather remaining elements (either in objects or arrays).
// Spread: Use ... to spread elements from one object/array to another.


