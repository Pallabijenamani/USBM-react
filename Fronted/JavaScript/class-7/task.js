// function Greeting(name,time) {
//     const now = new Date();
//      const hour = now.getHours();
  
//     if (hour < 12) {
//       return "Good morning!";
//     } else if (hour < 18) {
//       return "Good afternoon!";
//     } else {
//       return "Good evening!";
//     }
//   }
  
//   console.log(Greeting()); // Output: Depending on the current time

// function greeting(name,hour){
//     if (hour < 12) {
//         return `name is ${name},good morning`;
//     } else if (hour < 18){
//         return `name is ${name},good afternoon`;
//     } else {
//         return `name is ${name},good evening`;
//     }
    
// };
//const output =greeting("pallabi",10);
// console.log(output);

//arrow function
// const greeting=(name,hour)=>{
//     if (hour < 12) {
//         result urn `name is ${name},good morning`;
//     } else if (hour < 18){
//         return `name is ${name},good afternoon`;
//     } else {
//         return `name is ${name},good evening`;
//     }
    
// };
// const output =greeting("pallabi",10);
// console.log(output);

// // ex. simple calculator using function and switch statement
//    const calculater=(a,b,operator) => {
//     switch (operator){
//         case '+':
//           return a + b;
//       break;
//     case '-':
//       return a - b;
//       break;
//     case '*':
//       return a * b;
//       break;
//       return  a / b;
//       break;
//     default:
//       return "Invalid operator!";
//   }
//    }
// const output = calculater (4,8,"+");
// console.log(output);
   
// // to do BMI calculater
const BMI =(Weight,height) => {
   return Weight / (height * height);
  };
const output1= BMI(75,1.87);
console.log(output1);

 //rest parameter : to give one parameter like (1,2,3,4,5,6,7,8) consider as one parameter
//  const printNumber = (...number) =>{
//   return number;
//  }
//  let output = printNumber(1,2,3,4,5,6,7,8);
//  console.log(output);

//callback function
// function say (name,callback){
//       console.log (`my name ${name}`);
//      return callback;
//    }
// function hello(){
//   return "hello"
// }
// say("pallabi",hello);

//Q2.to do : make a user authentication system using callback function.

  const autentication = (enteredData, callback) => {
    return callback(enteredData);
}
const verify = (userData) => {
    let user = "user";
    let admin = "admin"
    if(userData === user){
        return "he/she is a user";
    }else if (userData === admin) {
        return "he/she is a admin";
    }else {
        return " unauthorized person";
    }
}
console.log(autentication("admin", verify));
 
 

//Asynchronous
// setTimeout (()=>{
//   console.log("hey usbm students");
// },5000);
// setInterval(()=>{
//   console.log("i am pallabi");
// },1000)

