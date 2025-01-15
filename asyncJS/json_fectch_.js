// const jsonString = '{"name": "Rohit", "age": 25}';
// const result = JSON.parse(jsonString);
// console.log(result.age);

// const jsObject = {
//     name: "Rohit",
//     age: 25,
//     isAdmin: false
//   };
//   const jsonObj = JSON.stringify(jsObject);
//   console.log(jsonObj);

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())  // Parse JSON response
// .then(data => console.log(data));   // Use the data

// 1. Convert the following object to a JSON string and store it in Local Storage:
// const user = {
//   name: "Rohit",
//   age: 25,
//   hobbies: ["coding", "music"],
//   isAdmin: true
// };
// let jsonString = JSON.stringify(user); // => JS object converted to JSON string 

// // strore the json in local storage
// localStorage.setItem("user",jsonString)
// let storeData = localStorage.getItem("user");
// console.log(storeData);


// LocalStorage in JS => 
  // const user = {
  //   name: "Rohit",
  //   age: 25,
  //   isAdmin:
  //    true
  // };
  // conveted JS object to JSON sting and store it in local storage
  // localStorage.setItem("user",JSON.stringify(user));

  //now lets get data from local storage
  // let storeUser = localStorage.getItem("user");
  // console.log(storeUser);
  
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(response => {
  //   console.log(response);  // This will log the Response object
  // })
  // .catch(error => console.error("Error:", error));

  //Practice Question 1: Fetch and Display User Data
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((res) => res.json() )
  // .then((data) => {
  //   console.log(data.name);
  // })


//   let books = [
//     {title: 1 , author:'Rohit', isAvailable: false},
//     {title: 2 , author:'Roshan', isAvailable: false},
//     {title: 3 , author:'Ravi', isAvailable: true}
//   ]
//   let availBook = []
//   function available (books){
//     books.forEach((curBook) => {
//       if(curBook.isAvailable){
//        availBook.push(curBook);
//       }
//     })
//     if(availBook.length === 0){
//       console.log("No books available right now!");
//       return
//       }
//       else{
// console.log(availBook);
//  return;
//       }
//   }
//   available(books);

  // Optimize version
  // let books = [
  //   { title: 1, author: 'Rohit', isAvailable: false },
  //   { title: 2, author: 'Roshan', isAvailable: true },
  //   { title: 3, author: 'Ravi', isAvailable: true }
  // ];
  
  // function available(books) {
  //   // Use filter() to get available books
  //   const availBook = books.filter(book => book.isAvailable);
  
  //   // Check if there are any available books
  //   if (availBook.length === 0) {
  //     console.log("No books available right now!");
  //   } else {
  //     console.log(availBook);
  //   }
  // }
  
  // available(books);
  
  // ---------------------------------QUESTION PRACTISE----------------------------------------------------------
// 1. Convert an object to a JSON string and store it in LocalStorage:
// const userDetails = {
//   name: "Rohit",
//   age: 25,
//   city:"Jamshedpur",
//   isLoggedIn: true
// };
// const jsonObj = JSON.stringify(userDetails);
// localStorage.setItem("userDetails",jsonObj)

// let userData  = localStorage.getItem("userDetails");

// const jsObj = JSON.parse(userData);
// console.log(jsObj);

//2.Fetch Data from an API and Display Specific Property:
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then((data) => {
//   data.forEach((curData)=> {
// console.log(curData.title);

//   })
// })

//3. Fetch and Display Users from JSONPlaceholder API:
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => {
//   data.forEach((curData)=> {
// console.log(`Name : ${curData.name}, Email: ${curData.email}`);

//   })
// })

// 5. Create a Book Search Function:

// function searchBookByTitle(books, searchTerm) {
  // Convert the search term to lowercase for case-insensitive matching
  // const lowercasedTerm = searchTerm.toLowerCase();

  // Use filter() to find books whose title contains the search term
//   const result = books.filter(book => book.title.toLowerCase().includes(lowercasedTerm));

//   return result;
// }

// Example usage:
// let books = [
//   { title: "JavaScript Basics", author: "Rohit", isAvailable: true },
//   { title: "HTML and CSS", author: "Roshan", isAvailable: false },
//   { title: "Advanced JavaScript", author: "Ravi", isAvailable: true }
// ];

// console.log(searchBookByTitle(books, "h"));

// 6. Practice Question: Add a Book to LocalStorage
// let books = [
//   { title: "JavaScript Basics", author: "Rohit", isAvailable: true },
//   { title: "HTML and CSS", author: "Roshan", isAvailable: false },
//   { title: "Advanced JavaScript", author: "Ravi", isAvailable: true }
// ];
// let jsonObj = JSON.stringify(books);
// localStorage.setItem("books",jsonObj);
// let booksData = localStorage.getItem("books");
// let jsObj = JSON.parse(booksData);
// console.log(jsObj);
// let newBook = { title: "React Fundamentals", author: "Raj", isAvailable: true };
