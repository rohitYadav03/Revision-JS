const car = {
brand:"TATA",
mode:"PUNCH",
year: 2023
}
// delete car.year;
// console.log(car);

// Object.freeze(car); // fully immutable ==> crete , update , delete kuch ni hoga 
// car.year = 2025;// nothing will change you can do anything now no key can be added or delete or update 
// console.log(car); 

// const newCar = {
//     brand:"TATA",
//     mode:"PUNCH",
//     year: 2023
// }
// Object.seal(newCar); // add or delete avi v ni hoga pr update hoga 

// newCar.engine = "Good"; //  not allowed or nothing will happen
// console.log(newCar);
// delete newCar.year; // not allowed or nothing will happen
// console.log(newCar);

// but in seal you can update the existing key value
// newCar.brand = "TOYOTA";
// console.log(newCar);

// const car2 = {
//     brand:"TATA",
//     mode:"PUNCH",
//     year: 2023
// }
    
// Object.preventExtensions(car2); // by using preventExtension now we cannot add something but we can delete things from the object 
// it is like 50% of seal that se cant add something but we can delete

// car2.engine = "Bad";
// delete car2.brand;
// console.log(car2);

// Object.defineProperty => 

    const car2 = {
            brand:"TATA",
            mode:"PUNCH",
            year: 2023
        }
    
    Object.defineProperty(car2,"brand",{
        writable: false, // Can the property value be changed (updated)? if it was true then you can cange from
                        // TATA to other brand cuurently it is false , so you cant change the value inside brand.
        enumerable: true,
        configurable: false // Can the property be deleted or modified later?
        // nfigurable: true: You can delete the property or
        //  modify its attributes later (e.g., change writable, enumerable, or delete it).
    });


// freeze => make fully immutable cannot add , update or delete 
// ceal ==> cannot add or delete but can update
//  preventExtension => cannot add but you can delete 
// 