// before classes how to write object 
let laptop = {
    name:"Asus Vivobook Pro 15",
    price: 53000,
    description: "R5 5600H Proccessor with 16 GB RAM with Nvidia RTX Grapthic Card",
    addToCart: function (){
        console.log("Laptop added to cart");
        
    }
}
// laptop.name = "Rohit";
// console.log(laptop);

// let mobile = {
//    name: "Realme",
//    price: "15000",
//    description: "5G with 5000mh battery",
//    addToCart: function (){
//     console.log("mobile added to cart");
    
//    }
// }

// Problem as the product incerese the code will be keep on inceresing by doing repetion task and updation also 
// become very hard 

// Class => useful because it gives blueprint, code is orgainse and scalable 

class product{
   // Data member => are like variable but without let , const , var
    name; 
    price;
    category;
    description;
    rating;

     constructor (name, price,category,description,rating){
       
        this.name = name;
        this.price = price;
        this.category = category;
        this.description =description;
        this.rating = rating;
     }
  // Member function => like function without function keyword
            //   or u can say function inside class
    addToCart() {
        console.log("product added to cart ");
        
    }

    removeToCart() {
        console.log("product removed from cart ");
        
    }

    displayProduct() {
        console.log(`
            📦 Product Name: ${this.name}
            💰 Price: ₹${this.price}
            📂 Category: ${this.category}
            📝 Description: ${this.description}
            ⭐ Rating: ${this.rating}
          `);
        }

     buyProduct() {
        console.log("Product bought");
        }
}

// console.log(typeof(product));
let laptopNew = new product("Asus Vivobook Pro 15",53000,"Electronics","R5 5600H Proccessor with 16 GB RAM with Nvidia RTX Grapthic Card",4.3);
// console.log(laptopNew);

let iphone = new product("Iphone 12 Pro",100000,"Electronics","Ghar jyega isme tera",4.1)
// console.log(iphone);
// laptopNew.displayProduct();
// iphone.displayProduct();

//  some Basic questions to practise :-

// Q1: Create a Person class with a constructor that accepts name and age. Create an object and log the name and age to the console.

class Person {
    name;
    age;
    constructor (name,age) {
   this.name = name;
   this.age = age
    }
}
let mySelf = new Person("Rohit", 22);
// console.log(mySelf.name);
// console.log(mySelf.age);

// Q2: Create a Car class with a constructor that accepts brand and year. Then create two objects from this class and log their details to the console.
class Car {
    brand;
    model;
    year;
    constructor(brand,model,year){
        this.brand = brand;
        this.model= model;
        this.year = year;
    }
}
let tata = new Car('TATA',"TATA PUNCH", 2024 );
let maruti = new Car("MARUTI","MARUTI SUZIKI",2000)
// console.log(tata);
// console.log(maruti);

//Q3. Create a Book class with properties title, author, and price. Add a method applyDiscount that reduces the price by a given percentage and returns the new price.
// class Book {
//     title;
//     author;
//     price;
//     rating;
//     constructor (title,author,price,rating){
//         this.title= title;
//         this.author = author;
//         this.price = price;
//         this.rating = rating;
//     }
//     applyDiscount (discountPercentage){
//     let discountAmount = (this.price * discountPercentage)/ 100;
//     let finalPrice = this.price - discountAmount
//     return finalPrice;
//     }
//     displayBook() {
//         console.log(`
//             📦 Book Name: ${this.title}
//             💰 Price: ₹${this.price}
//             📝 Author: ${this.author}
//             ⭐😎 Rating: ${this.rating}
//           `);
//         }

// }

// let Journey = new Book("Life Lesson","Rohit" , 1000,4.9)
// Journey.displayBook();

// let discountedPrice = Journey.applyDiscount(20);
// console.log(`📉 Discounted Price: ₹${discountedPrice}`)


//4. Create a Rectangle class with properties width and height. Add a method perimeter that calculates the perimeter of the rectangle (formula: 2 * (width + height)). Then, create an object and log the perimeter.

// class Rectangle {
//     width;
//     height;
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     perimeter (){
//    let ans = 2 * (this.width + this.height);
//    return ans
//     }
// }
// let rect = new Rectangle(5,5);
// let par = rect.perimeter()
// console.log(par);
// console.log(rect);

//5. Bank Account System
// class BankAccount {
//     accountNumber;
//     accountHolder;
//     balance;
//     constructor (accountNumber,accountHolder,balance){
//    this.accountNumber = accountNumber;
//    this.accountHolder = accountHolder;
//    this.balance = balance;
//     }
//     deposit(amount){
//          this.balance = this.balance+ amount;
//         return this.balance
//     }
//     withdraw(amount) {
//          this.balance = this.balance - amount;
//         return this.balance;
//     }
//     transfer(amount, targetAccount){
//        if(amount > this.balance){
//         console.log("❌ Insufficient funds for transfer!");
//        } else {
//          this.balance -= amount;
//         targetAccount.balance += amount;
//         console.log(`${amount} transfer to ${targetAccount.accountNumber}. Your new Balance is ${this.balance}`);
        
//        }
//     }
//     displayBalance () {
//      console.log(this.balance)
     
//     }
// } 
// let rohit = new BankAccount(1,"Rohit Yadav",10000);
// let friend = new BankAccount(2,"Friend", 5000);
// rohit.deposit(3000);
// rohit.displayBalance();

// rohit.withdraw(8000);
// rohit.displayBalance();

// rohit.transfer(4000, friend);
// rohit.displayBalance();
// friend.displayBalance();