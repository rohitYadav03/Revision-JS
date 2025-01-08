function customSeal (obj){
     let keys = Object.keys(obj);

     for(let i = 0; i<keys.length; i++){
        Object.defineProperty(obj, keys[i], {
            configurable: false // this will make sure you will be not able to delete anything
        });
        Object.preventExtensions(obj) //Prevent adding new properties to the object
  
     }
}
// seal Propety => cannot add or delete you can only update
const product = {
    name: "Iphone 14 Pro",
    price: 125000
};

customSeal(product);
console.log(Object.isSealed(product));

// delete product.price;
console.log(product); // ❌ Not allowed (price cannot be deleted)
product.color = "Black"; // this is also not allowed
// console.log(product);

console.log(product);
















