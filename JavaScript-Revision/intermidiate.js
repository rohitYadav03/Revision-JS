// Question 6: Reverse a String

// function ReverseString (str) {
//     let ans = '';
//     for(let i = str.length - 1; i>=0; i--) {
//      ans += str[i]
//     }
//     return ans
// }
// let finalAns = ReverseString("Hello");
// console.log(finalAns);

// Question 7: Find Maximum and Minimum Numbers in an Array

// 1. First approch of my 
// const arr = [1,2,4,5,-5,66,6,6,567,5,3,22,4456,];
// function min_Max(Array) {
//     let max = arr[0]
//     let min = arr[0];
//      for(let i = 1; i<Array.length; i++){
//       if(arr[i] > max) {
//         max = arr[i]
//       }
//      }
//      for(let j = 1; j<Array.length; j++){
//         if(arr[j] < min) {
//             min = arr[j]
//         }
//      }
//      console.log("Max value is :" ,max);
//      console.log("Min value is : ", min);
     
// }
// min_Max(arr);

 // 2. optimized approch 
//  const arr = [1,2,4,5,-5,66,6,6,567,5,3,22,4456,];
// function min_Max(Array) {
//     let max = arr[0]
//     let min = arr[0];
//      for(let i = 1; i<Array.length; i++){
//       if(arr[i] > max) {
//         max = arr[i]
//       }
//       if(arr[i] < min) {
//         min = arr[i]
//     }
//      }
     
//      console.log("Max value is :" ,max);
//      console.log("Min value is : ", min);
     
// }
// min_Max(arr);

// Question 8: Sum of All Even Numbers in an Array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// function sumOfEven (array) {
// let sum = 0;
// for(let i =0 ; i<array.length; i++) {
//     if(array[i]%2 === 0){
//       sum += array[i];
//     }
// }
// return sum
// }

// let ans = sumOfEven(arr);
// console.log(ans);

//  Question 9: Common Elements Between Two Arrays

// let arrOne = [1,2,34,5,6,7,9,3];
// let arrTwo = [5,6,7,8,90,0,17,7];

// function newArr (arr1 , arr2) {
//     let newArray = [];

//     for(let i = 0; i< arr1.length; i++){
//        for(let j = 0; j< arr2.length; j++){
//         if(arr1[i] === arr2[j] && !newArray.includes(arr2[j])){
//             newArray.push(arr2[j]);
//         }
//        }
        
//     }
//    return newArray;
// }
// let ans = newArr(arrOne,arrTwo);
// console.log(ans);

// Question 10: Find the Sum of All Numbers in an Array

// let arr = [1,2,3,4,5,56,67,7];
// function sumOfArray (array){
//     let sum = 0;
//   for(let i = 0; i<array.length; i++){
//   sum += array[i]
//   }
//   return sum;
// }
// let ans = sumOfArray(arr);
// console.log(ans);


// Question 11: Find the Largest Even Number in an Array

// let arr = [1,2,3,4,5,67,6,7,8,156,76,45,98];
// let arr = [1,3,5,7,9];
// function maxEven (array) {
//   let max = -1; // -1 means no even number is there in the array
//   for(let i =0; i<array.length; i++){
//     if(array[i]%2 === 0){
//         if (array[i] > max){
//             max = array[i];
//         }
//     }
//   }
//   return max;
// }

// let ans = maxEven(arr);
// if(ans == -1){
//     console.log("No even number in the given array");
// }
// else {
//     console.log(ans);
    
// }

// Question 12: Find the Common Elements Between Two Arrays
// let arr1 = [1, 2,5, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8,];

// function commonElements (arrOne , arrTwo) {
//     let newArr = []
//    for(let i =0 ; i<arrOne.length; i++){
//     for(let j =0; j<arrTwo.length; j++){
//         if(arrOne[i] === arrTwo[j] && !newArr.includes(arrTwo[j])){
//      newArr.push(arrTwo[j]);
//         }
//     }
//    }
//    return newArr;
// }

// let result = commonElements(arr1, arr2);
// console.log(result); 


// Question 13: Find the Difference Between Two Arrays
// Write a function that takes two arrays and returns a new array 
// containing the elements that are present in the first array but not in the second.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// function difference(arrOne, arrTwo) {
//     let newArr = [];
//        for(let i = 0; i<arrOne.length; i++){
//       if(!arrTwo.includes(arrOne[i])){
//         newArr.push(arrOne[i])
//       }
//        }
//        return newArr;
// }

// let result = difference(arr1, arr2);
// console.log(result); 

// Question 13: Find the Union of Two Arrays

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];


// function Union(arrOne, arrTwo) {
//   let newArr = [...arrTwo];
//        for(let i = 0; i<arrOne.length; i++){
//       if(!newArr.includes(arrOne[i])){
//         newArr.push(arrOne[i])
//       }
//        }
//        return newArr;
// }

// let result = Union(arr1, arr2);
// console.log(result); 

// Question 14: Create a function that returns the 
// second largest number in an array

let arr1 = [1, 2, 3, 4, 5];
function secondLarge (arr){
let max = arr[0];
let secMax = arr[0];
for(let i =1; i<arr.length; i++){
  if(arr[i]> max){
    max = arr[i];
  }
}
for(let j = 1; j<arr.length; j++){
  if(arr[j]> secMax && arr[j] != max){
    secMax = arr[j]
  }
}
return secMax;
}

let second = secondLarge(arr1);
console.log(second);
 
