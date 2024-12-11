// os modules

//import modules
 const os = require("os");
 console.log("os");
 
 console.log(os.homedir()); //C:\Users\HP
 console.log(os.hostname()); // ABHI
 console.log(os.platform()); //win32
 console.log(os.userInfo()); //[Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'HP',
//     homedir: 'C:\\Users\\HP',
//     shell: null
//   }
 console.log(os.totalmem()); //8210415616
 console.log(os.freemem());  //1421406208
 console.log(os.userInfo().username); //HP

 //console.log(Total memory   ${os.totalmem() / (1024*1024*1024) GB});
 


  

 