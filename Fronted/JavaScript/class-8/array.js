let newArray=[];
console.log(newArray);
console.log(typeof newArray);

// let name= "pallabi";
// let age=22;
// let profession="criminal";
// let ismarried=true;

let userArray=["pallabi",34,"criminal",true]; //array declaration
console.log(userArray);

let newNumber=new Array(1,2,3,4,5);
console.log(newNumber);
//Array methods :
let newNumber1=new Array(1,2,3,4,5,6,7);
console.log(newNumber1.length);
//Accessing
let cities=["bbsr","ctc","balesore","jajpur","Bhadrak"];
console.log(cities[0]);
console.log(cities[2]);
//last element:
let lastcity= cities.length-1; //bhadrak
console.log(cities[lastcity]);

//balesore
console.log(cities[2]);
console.log(cities[lastcity/2]);
console.log(cities[lastcity-2]);

//modified:
let modifycity= "kendrapada";
cities[2]=modifycity;
console.log(cities);

//add element: using push() method
 console.log(cities);
 let addcity= "jagatsinghpur";
 cities.push(addcity);
 console.log(cities);
  
 //pop()
 console.log(cities);
 let removecity= "jagatsinghpur";
 cities.pop(removecity);
 console.log(cities);
  
 //shift()
 console.log(cities);
 cities.shift(""); //remove bbsr from 1st
 console.log(cities);
 //unshift()
 console.log(cities);
 cities.unshift("baripada"); // add baripada in 1st
 console.log(cities);
  





