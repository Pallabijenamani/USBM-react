// task1:  Generate a random number between 1 and 100.

let final = 100;
let start = 1;
let total_number1 = (final - start + 1) ;
let random_number2 = Math.floor (Math.random() * total_number1 + start) ;
console.log (random_number2) ;

// 2. Task: Round the number 6.75 down to the nearest integer.

console.log(Math.round(6.75));
// // 3. Task: Round the number 9.12 up to the nearest integer.

console.log(Math.ceil(9.12));

// 4. Task: Generate a random number between 5 and 27 (inclusive).
let end = 27 ;
 let start1 = 5 ;
let total_number = (end - start + 1) ; //23 i.e 0 -23
let random_number1 = Math.floor (Math.random() * total_number + start) ;
console.log (random_number1) ;

// 5. Task: Add 5 days to the current date.

let date = new Date();
console.log (date.getDate() + 5 );
// 6. Task: Get the number of milliseconds between January 1, 2023, and today.
let startdate = new Date('2023-01-01') ;
let enddate = new Date('2024-10-15') ;

let difMilliseconds =enddate.getTime() - startdate.getTime();
console.log(difMilliseconds);//56419200000 = 564,192 seconds
//  = 9,403.2 minutes
//  = 156.72 hours
//   = 6.53 days 
//   = 17.91 years

// 7. Task: Get the current hour.

let date3 = new Date();
let current_hour = date.getHours();

console.log(current_hour); //21

// 8. Task: Create a date for January 1, 2025.
let date4 = new Date('2025-01-01');
console.log(date); //2024-10-15T15:42:19.556Z

// 9. Task: Get the current day of the week (0 for Sunday, 6 for Saturday).

let date2 = new Date();
let current_day = date.getDay();

console.log(current_day);

// 10. Task: Get the current month (0-11).

let date1 = new Date();
let current_month = date.getMonth() + 1 ;

console.log(current_month); 

// // 11. Task: What is the difference between getDate() and getDay()?

console.log(date.getDate());

console.log(date.getDay()); 

//getDate()

//Returns  the day of a month(1-31) and Reflects the calender date .

//getDay

//Returns the day of a week.where 0 represents Sunday and 1 represents Monday.