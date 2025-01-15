// Task 1: Create a Promise to Return a Delayed Message

// function hello (){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//     resolve("Hello world!")
//         },2000)
//     })
    
// }
// hello().then((msg) => {
//     console.log(msg);
    
// })  

// Task 2: Simulate a Coin Toss Using Promises
// function toss (){
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random()*100);
//       setTimeout(() => {
//         if(num < 50){
//             resolve("Heads")
//         }
//         else if(num >= 50){
//    reject("Tails")
//         }
//       },1000)
//     })
// }
// toss().then((msg) =>{
//     console.log(msg);
    
// }).catch((err) => {
// console.log(err);

// })

// Challenge 3: Chaining Promises

// const pr1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve("Preparing")
//    }, 1000);
// })
// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("cooking")
//        }, 1000);
// })
// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("serving")
//        }, 1000);
// })
// pr1.then((msg) => {
//    console.log(msg);
 
// })
// pr2.then((msg) => {
//     console.log(msg);
    
//  })
//  pr3.then((msg) => {
//     console.log(msg);
    
//  })  ❌ => this is what i though but this is not chaning this is absolutely wrong method 

// correct way => ✔️
// const pr1 = new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve("Preparing")
//        }, 1000);
//     })
// pr1.then((msg) => {
//     console.log(msg);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//      resolve("cooking")
//         },1000)
//     });
// }).then((msg) => {
//     console.log(msg);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Serving")
//         },1000);
//     });
// }).then((msg) => {
//     console.log(msg);
    
// });

// Challenge 1: Fetching API Data
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//   return  res.json(); // this will convert reponse object into JS object
// })
// .then((data) => {
//      data.forEach((rohit) => {
//     console.log(rohit.name);
    
//      })
// })
// .catch((err) => {
//     console.log(err);  // Handle any errors
//   });

//Task: Simulating Asynchronous Tasks with Promise.all
// first download a file -> update that file -> upload

// 1. Simulating downloading a file
// const downloadFile = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("File downloaded");
//         resolve("Download complete"); // Resolving the promise after 2 seconds
//     }, 2000);
// });

// // 2. Simulating updating the file (depends on download)
// const updateFile = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("File updated");
//             resolve("Update complete"); // Resolving after 3 seconds
//         }, 3000);
//     });
// };

// // 3. Simulating uploading the file (depends on update)
// const uploadFile = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("File uploaded");
//             resolve("Upload complete"); // Resolving after 1 second
//         }, 1000);
//     });
// };

// // Chaining the promises to ensure they run in order
// downloadFile
//     .then((message) => {
//         console.log(message);  // Logs "Download complete"
//         return updateFile();   // After download, we update the file
//     })
//     .then((message) => {
//         console.log(message);  // Logs "Update complete"
//         return uploadFile();   // After update, we upload the file
//     })
//     .then((message) => {
//         console.log(message);  // Logs "Upload complete"
//     })
//     .catch((error) => {
//         console.log("Error:", error);  // Handles any error that happens during the process
//     });


// Task: Error Handling (Coin Toss Simulation with Retry)
// function toss (){
//         return new Promise((resolve, reject) => {
//             let num = Math.floor(Math.random()*100);
//           setTimeout(() => {
//             if(num < 50){
//                 resolve("Heads")
//             }
//             else if(num >= 50){
//        reject("Tails")
//             }
//           },1000)
//         })
//     }
//     function coinTossWithRetry(attempt = 1){
//       toss()
//       .then((msg) => {
//         console.log(`success : ${msg}`)
//       })
//       .catch((err) => {
//         console.log(`Attempt ${attempt}: ${err}`);
//         if(err == "Tails" && attempt < 3){
//             console.log("Retrying......")
//             coinTossWithRetry(attempt + 1)
//           }
//           else{
//             console.log("game over");
            
//           }
//       });
     
//     }
//     coinTossWithRetry();


//Level 2: Intermediate Concepts - Fetching API Data
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((user) => {
// console.log(user.name);

//     })
// })
