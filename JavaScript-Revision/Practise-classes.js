// Q1: Create a Car Class

class Car {
    brand;
    model;
    year;
    constructor (brandName, modelName, modelYear){
    this.brand = brandName;
    this.model = modelName;
    this.year = modelYear;
    }
    startEngine(){
        console.log("Engine Started");
        
    }
    displayProduct (){
        console.log(`
        🏎️  Brand Name  : ${this.brand};
        🔥 Model Name  : ${this.model};
        🎉 Launch Year : ${this.year};
            `);
        
    }
}
let car = new Car("TATA","PUNCH",2000);
// car.startEngine();
// car.displayProduct();

// class User {
//     name;
//     email;

//     constructor (name, email){
//         this.name = name;
//         this.email = email;
//     }
//     displayUser(){
//         console.log(`
//             User Details -
//             Name : ${this.name}
//             email : ${this.email}
//             `);
        
//     }
// }
// let user = new User("John Doe","john@example.com");
// user.displayUser();

class BankAccount{
    #accountNumber;
    #balance;
    
    constructor (acounrNumber , accountBalance){
   this.#accountNumber = acounrNumber;
   this.#balance = accountBalance;
    }

    get balance (){
        return this.#balance
    }
    set bal (amount){
        if(amount > 0){
            this.#balance = amount;
        }
        else{
            console.log("Invalid Amount");
            
        }
    }
    withdraw(amount){
        if(amount > this.#balance){
     console.log("Insufficient funds");
     
        }
        else{
         return   this.#balance -= amount;
        }
    }
    deposit(amount){
  return this.#balance += amount;
    }
    transfer(amount, targetAccount){
        if(this.#balance > amount){
            this.#balance -= amount;
            
        }
    }
}

// const myAccount = new BankAccount(123456, 5000);
// console.log(myAccount.balance); // Output: 5000

// myAccount.bal = 10000; // Using setter
// console.log(myAccount.balance); // Output: 10000

// myAccount.bal = -500; // Invalid amount
// console.log(myAccount.balance); // Output: 10000

const myAccount = new BankAccount(123456, 5000);
myAccount.deposit(1000);  // Deposits 1000
console.log(myAccount.balance); // 6000

myAccount.withdraw(2000); // Withdraws 2000
console.log(myAccount.balance); // 4000

myAccount.withdraw(5000); // Insufficient funds
console.log(myAccount.balance); // 4000
