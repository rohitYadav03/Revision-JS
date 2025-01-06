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
laptopNew.displayProduct();
iphone.displayProduct();