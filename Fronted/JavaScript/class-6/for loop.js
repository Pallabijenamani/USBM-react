// for (let i=5;i>=1;i--)  ctrl+/
//     {
//     console.log(i);
//  }
//  console.log("\n \n \n");
 // generate random number and add them upto 5 times
// 
// let sum=0;
// for(let i=0; i<=5;i++){
// let random= math.floor(math.random()*10);
// let result = sum + random;
// console.log(`the random sum result is ${result}`);
// }

for(let i=1; i<=5; i++){
  for (let j=1;j<=2;j++){
    console.log(`inner ${j}`);
  }
  console.log(`outer ${i}`);
}

//ex: pattern printing
 for(let i=1;i<=5;i++){
  let pattern ="";
  for(let j= 1;j<=i;j++){
    pattern +="*";
  }
  console.log(pattern);
 }


