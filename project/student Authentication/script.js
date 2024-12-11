const users = JSON.parse(localStorage.getItem("user")) || [];


// to manipulate html elements 
// const username=document.getElementById("username").value;
// const email=document.getElementById("email").value;
// const password=document.getElementById("password").value;
const submit=document.getElementById("submit");
const Login=document.getElementById("login");

//display dashboard if the user is logged in
function showView(view){
    document.getElementById("signup").style.display =
     view === "signup" ? "block" : "none";
   
}

//Add events
submit.addEventListener("click",signup);
Login.addEventListener("click",login);

function signup(){
const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

 const newUser={
  name:username,
  email:username,
  password:password,
 };

 //check if user already exist
 const
 users.push(newUser);
 localStorage.setItem("user",JSON.stringify(users));
 alert("signup successful! You can now Login");

}
// login
function login(){
    const username= document.getElementById("username").va
}
//logout
function logout(){
    localStorage.removeItem("loggeduser");
    alert("you've successfully loggedout");
}
