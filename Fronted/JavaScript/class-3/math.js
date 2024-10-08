// mathematical operator
let num1 = 7;
let num2 = 8;
let result = num1 + num2; //addition operator
let result1 = num2 - num2; //substarction
let result2 = num2 * num2; // multiplication
let result3 = num2 / num2; //division

// modulo operator
//to find out remainder
let num = 29;
let even = num % 2;
console.log(even);

// Exponentiation operator
let square = 2 ** 2;
let cube = 2 ** 3;
console.log(square);
console.log(cube);

//relational operator
//to campare two values
console.log(5 >= 5);
console.log(!5);

//eqality operator
// `==` : check value
// `===`: value and data type check
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");

// coditional operator:
// if (condition){
//   true code to be executed here
//   }

// falsy value:
// false, 0, -0 ,"",``.'', null, undefined, NaN

if ("___") {
  console.log("it is true");
}

if (-100) {
  console.log("it is true");
}

//given total_bill , discount_start_price if you satisfy the condition print discount
let total_bill = 2000;
let discount_start_price = 700;
if (total_bill > 2000) {
  console.log(" available");
} else {
  console.log("no discount");
}

// task2
let age = 22;
let gender = "male";

if (gender === "male") {
  if (age == 22) {
    console.log("he can marry");
  } else {
    console.log("he can't marry now");
  }
} else {
  console.log("she is a female");
}

// task3
let age1 = 60;
if (age1 >= 60) {
  console.log("senior");
} else if (age1 >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}
//logical operator
let char = "a";
if (char === "a");
{
  console.log("vowel");
}

// switch case
//check vowel(a,e,i,o,u)
let char1 = "a";
switch (char) {
  case "a":
    console.log("it is a vowel");
    break; // to break the flow
  case "e":
    console.log("it is a vowel");
    break;

  case "i":
    console.log("it is a vowel");
    break;
  case "o":
    console.log("it is a vowel");
    break;
  case "u":
    console.log("it is a vowel");
    break;
  default:
    console.log("it is not vowel");
}

//week
let week = "tuesday";
switch (week) {
  case "sunday":
    console.log("it is sunday");
    break;
  case "monday":
    console.log("it is monday");
    break;
  case "tuesday":
    console.log("it is tuesday");
    break;
  case "wednesday":
    console.log("it is wednesday");
    break;
  case "thusday":
    console.log("it is thusday");
    break;
  case "friday":
    console.log("it is friday");
    break;
  case "saturday":
    console.log("it is saturday");
    break;
  default:
    console.log("it is not a day");
}

// print all month

let monthnumber = 7;
switch (monthnumber) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("invalid month number");
}
