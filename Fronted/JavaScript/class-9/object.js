//object
let student={
    name:"pallabi", //name....(key), pallavi.....(value)
    age:22,
    batch:"mca",
    roll:69
};
console.log( student);

//using constructor create object:
const student1=new Object();
student1.name="pallabi";
student1.age=22;
student1.batch="mca";
student1.roll=69;
console.log(student1);

//Accessing element:
//Bracket([]) notation and Dot(.) notation
//ex. want ti access students name?
console.log(student1["name"]);
console.log(student1.name);
//modify element:
student1.name="rakhi";
console.log(student1);

// to do: create an array of object of 50 students.
//[{},{},{}......upto 50] hint


//JSON(javascript object notation)
//frontend to backend is stringfy and backend to frontend parse
