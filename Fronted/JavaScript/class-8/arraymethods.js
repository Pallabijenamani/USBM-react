//concat:
let fruits=["apple","banana","orange"];
let addArray=fruits.concat(["mango","pitch"]);
console.log(addArray);
//include():
let students=["pallavi","anshu","bikash","soumya"];
let names=students.includes("pallavi");
console.log(names);

//slice():
const animal=["ant","camel","duck","elephant","bison"];
const slice= animal.slice(2); 
console.log(slice);  //camel,duck.bison
const animal1=animal.slice(2,4);
console.log(animal1);//duck,elephant

//splice() : 
 const months=["jan","march","april","june"];
 months.splice(1,0,"feb"); //1=index no where we add / 0=delete no(delete count)/ feb=value which we add
 console.log(months);
 months.splice(3,0,"aug");
 console.log(months);
 months.splice(2,3,"oct","nov");
 console.log(months);

//reverse():
//forEach():
const array1 =["a","b","c"];
const arr2=[1,2,3,4,5];
// console.log(arr2);
//double the no of arr2
// for(let i=0;i<arr2.length;i++){
//     const double= arr2[i]*2;
//     arr2[i]=doubled;
// }
//    foreach()
//    arr2.forEach()

arr2.forEach((el,i)=>{
    console.log(el*2);
    
}
)

//HOF: Higher order function
let arr=["A","B","R","S","J","P"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);   
// }
//using forEach();
// arr.forEach((el,i)=>{
//     console.log(el,i);  
// });
//map() array (convert lower case) //popularity case use
arr.map((el,i)=>{
//console.log(el);
console.log(el.toLowerCase());
});
//modification
const newArray=arr.map((el,i)=>{
    return el.toLowerCase();
});
console.log(newArray);

//filter() : //particular portion use
let newArray1=[1,2,3,4,5,6,7];
//filter out the odd numbers:
const oddNumbers=newArray1.filter((el)=>{
 return el%2!==0
});
console.log(oddNumbers);


 




