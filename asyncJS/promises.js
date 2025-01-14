// basic syntax :-
// const promise = new Promise(function executer(resolve, reject){
//   let success = false;
//   if(success){
//     resolve("Promise resolved !")
//   }
//   else{
//     reject("Promise rejected")
//   }
// })
// promise.then(function(res){
//   console.log(res);
// }).catch((err) => {
// console.log(err);

// })

// Task 1: Simple Promise Creation
// const myPromise = new Promise(function(resolve, reject){
//   resolve("hello, Promise")
// })
// myPromise.then(function(result){
// console.log(result);
// })
// .catch((err) => {
//   console.log(err);
  
// })

// Task 2: Promise with Rejection
// const randomPromise = new Promise((resolve, reject) => {
//     let randomNum = Math.floor(Math.random() * 100);
//     console.log(randomNum);
//     if(randomNum > 50){
//       resolve("Number grether than 50")
//     }
//     else if(randomNum < 50){
//   reject("Number less that 50")
//     }
//     else{
//       console.log("Number is equal to 50");
//     }
// })
// randomPromise.then((res) => {
//    console.log(res);
// })
// .catch((err) => {
//   console.log("Error",err);
  
// })

// Task 3: Promise Chaining
// const randomPromise = new Promise((resolve,reject) => {
//  const num =   Math.ceil(Math.random() * 100)
//  console.log(num);
//  resolve(num)
// })
// randomPromise.then((num) => {
//  return num *2;
// }).then((num) => {
//   console.log(num - 10);
  
// }).catch(() => {
//   console.log("Error");
  
// })

// Task 4: Complex Promise Chaining with Error Handling
// const pr = new Promise((resolve,reject) => {
//   let num = Math.ceil(Math.random() *100);
//   console.log(num);
  
//    resolve(num);
// })
// pr.then((num) => {
//    num = num/2;
//    if(num < 25){
//    return Promise.reject("Number is too low")
//    }
//    else{
//     return num + 10;
//   }
// }).then((num) => {
//   console.log("Success",num);
  
// }).catch((err) => {
//   console.log("failure",err);
  
// })

// Task 5: Using Promise.all() for Concurrent Promises
const pr1 = new Promise((resolve,reject) => {
     setTimeout(() => {
        console.log("Promise resolve 1");
        resolve("Result from promise 1")
        
     },3000);
});
const pr2 = new Promise((resolve,reject) => {
    setTimeout(() => {
       console.log("Promise resolve 2");
       resolve("Result from promise 2")
       
    },2000);
});
const pr3 = new Promise((resolve,reject) => {
    setTimeout(() => {
       console.log("Promise resolve 3");
       resolve("Result from promise 3")
       
    },1000)
});
Promise.all([pr1,pr2,pr3])
.then((res) => {
  console.log("Success", res);
  
}).catch((err) => {
    console.log("Error",err);
    
})