function customFreeze(obj){
    Object.preventExtensions(obj)
   let keys = Object.keys(obj);
   for(let i =0; i<keys.length; i++){
         Object.defineProperty(obj, keys[i], {
            writable: false,
            configurable:false
         })
   }
}
let product = {
    productName: "Iphone",
    price: 12000
}
customFreeze(product);
console.log(Object.isFrozen(product));
product.new = "something";
console.log(product);

// Object.freeze => add , update , or delete 