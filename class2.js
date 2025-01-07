// console.log("Hello world6");

// class Product {
//     #name;
//     #price;
//     rating;


//     constructor (name,price,rating) {
//    this.#name = name;
//    this.#price = price;
//    this.rating = rating;
//     }

//     // lets crete geater seter
//     getPrice() {
//         return this.#price;
//     }
//     setPrice (num){
//         if(num > 0){
//       this.#price = num;
//         }
//         else {
//             console.log("Invalid Price");
            
//         }
//     }
//     displayProduct() {
//         console.log(`Product displayed, 
//             🗿 ${this.#name}, 
//            💲 ${this.#price},
//            ⭐ ${this.rating}`);
//     }
// }
// let iphone = new Product("Iphone 11", 900, 4.5);
// // console.log(iphone);
// // this.#name = "Iphone 15";  // this same thing working in chrome console
// // console.log(iphone);   // but in vs code it is throwing error
// iphone.displayProduct();
// iphone.setPrice(100000);
// iphone.displayProduct();

// class Product {
//     #description;
  
//     get description() {
//        this.#description;
//     }
  
//     set description(value) {
//       if (value.length > 0) this.#description = value;
//       else console.log("Invalid description");
//     }
//   }
  
//   let laptop = new Product;
//  laptop.description = ("Asus vivobook");
//  laptop.description;

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
  }
  let iphone = new Product("iPhone 11", 900, "Apple iPhone 11");
    console.log(iphone);
    