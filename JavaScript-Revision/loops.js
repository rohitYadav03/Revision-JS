// 1. sum of 1 to 10

// let sum = 0;
// for(let i =1; i<= 10; i++){
//   sum += i
// }
// console.log(sum);

//  using while loop
// let i = 1;
// while(i <= 10){
//     sum += i;
//     i++
// }
// console.log(sum);

// 2.Check Prime number

// function checkPrime (number) {
//  if(number== 2){
//     return true;
//  }
//  for(let i =3; i<number; i++){
//     if(number%i ==0){
//       return false;
       
//     }
//  }
//  return true;
// }
// let res = checkPrime(15);
// if(res == true){
//     console.log("Prime number");
    
// }
// else{
//     console.log("Not prime");
    
// }

// optimized version
// function isPrime(num){
//   if(num<= 1) return false;
//   if(num == 2) return true;
//   if(num%2 == 0) return false;
//   for(let i = 3; i<Math.sqrt(num); i++){
//     if(num%i === 0){
//         return false
//     }
//   }
//   return true;
// }
// let num = 15;
// let res = isPrime(num)
// if(res === true){
//     console.log("Prime number",num);
// }
// else if(res === false){
//     console.log("Not a Prime ",num);
    
// }