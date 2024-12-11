/* eslint-disable react-hooks/rules-of-hooks */
import  {useState} from "react";

const form = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('');
  const [email,setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password,setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  }
  console.log(username); 
  console.log(email);
  
  
  return (
    <div className='flex gap-3  justify-center items-center flex-col mt-5'>
      <input type="text"placeholder='username' 
      required
      value={username}
      onChange={handleChange}
     className='bg-slate-500 text-white' 
     />
     <input type="email" 
     placeholder="abc@gmail.com" 
     className="bg-slate-500 text-white" 
      onChange={emailChange} />
      <button className='bg-red-500 text-white'>Submit</button>
    </div>
  )
}

export default form
