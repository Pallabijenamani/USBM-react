//Q5. 
for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
      pattern+="*";
    }
  console.log(pattern);
  }
  console.log("\n \n \n");
  //Q6.
  for (let i = 5; i >= 1; i--) {
   pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }

  console.log("\n \n ");
  //Q7:
for (let i = 1; i <= 5; i++) { //representing total no of rows(outer loop)
    let pattern = "";
    // for spaces
    for (let j = 1; j <= 5 - i; j++) { //adds spaces before the stars in each row
      pattern += " ";
    }
    // for stars
    for (let j = 1; j <= (2*i-1); j++) { //generates stars in each row (inner loop)
      pattern += "*";
    }
    
    console.log(pattern);
  }


 //Q8.
  console.log("FLOUDS'S TRIANGLE")
  let n = 5; // Number of rows
let num = 1; // Starting number

for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += num + " ";
        num++; // Increment the number
    }
    console.log(pattern.trim()); // Print the row
}
