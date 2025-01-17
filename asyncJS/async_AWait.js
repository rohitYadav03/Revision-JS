// What is async/await?
// Definition:

// async/await is a way to write asynchronous code in a cleaner and more readable manner, compared to using Promises or callback functions.
// It is syntactic sugar over Promises, making async code look synchronous.
// Key Rules of async/await :-
// Use the async keyword before a function to make it asynchronous.
// Inside an async function, you can use the await keyword to pause execution until a Promise is resolved or rejected.
// await can only be used inside async functions.
// An async function always returns a Promise.


// Question 1: Write an async function that fetches data from
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
    
// })

// Async method => 
// async function call() {
//     try{
//         let res =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         let data = await res.json();
//         console.log(data);
//     }
//  catch(error){
// console.error(error);

//  }
   
// }
// call()

// Question 2: Create a function that simulates a delay using setTimeout wrapped in a Promise, then use await to pause execution for 3 seconds.

// async function delay() {
//  let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      resolve("Done waiting!")
//     },3000)
//  })
//  let result =  await p;
//  console.log(result);
 
// }
// delay();

// Question 3: Fetch Multiple APIs in Parallel Using async/await
// async function pr1() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//      return await res.json();
   
    
// }
// async function pr2() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     return await res.json();
  
    
// }
// async function fetchData() {
//     let [data1,data2] = await Promise.all([pr1(),pr2()]); // aray destruting
//     console.log(data1,data2);
    
// }

// fetchData()

// Question 4: Fetch Data with Error Handling
// async function getData() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         if(res.ok === false){
//             throw new Error("Failed to fetch data");
            
//         } // alway check the reposnce before the parsing phase 

//         let data = await res.json(); // if request is successful the convert the json string into js object
//         console.log(data);

//     } catch (error) {
//         console.error("Something went wrong!",error.message )  // error.message => Log the specific error messag
//     }
// }
// getData();

// Question 5: Implement Retry Logic with async/await
async function getData() {
    for (let i = 1; i <= 3; i++) {  // Loop through 3 attempts
        try {
            console.log(`Attempt ${i}`); // Log the attempt number

            // Fetch data from API
            let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

            if (res.ok) {
                let data = await res.json();
                console.log("Success!", data); // Log the data on successful fetch
                break; // Exit the loop if successful
            }

            throw new Error("Failed to fetch data"); // Manually throw error if not OK
        } catch (error) {
            console.log(`Attempt ${i} failed: ${error.message}`);

            if (i === 3) {
                console.log("Failed after 3 attempts");
            } else {
                console.log("Retrying...");
            }
        }
    }
}

getData();
