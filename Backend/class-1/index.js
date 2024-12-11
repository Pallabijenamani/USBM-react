// import modules
const { log } = require("console");
const math = require("./math");
const fs = require("fs"); //fs=filesystem

// custom modules
console.log(math.add(5,6));
console.log(math.sub(11,6));
console.log(math.mul(11,2));
console.log(math.div(18.6,2));

// in-built modules
console.log(fs);


//write file
fs.writeFileSync("notes.txt","I am learning backend");
//fs.writeFile("notes.md","ths is my notes file.");

//append: add the string end of the file
fs.appendFileSync("notes.txt"," usbm \n");

//read
const data =fs.readFileSync("notes.txt");
console.log(data.toString());

//create folder
 fs.mkdirSync("file.js");

//REName
fs.renameSync("file.js","node.js");

//delete 
fs.rmdirsync("node.js");
