/* eslint-disable no-unused-vars */
import React ,{useEffect,useState} from 'react';
import axios from "axios";

const Memes = () => {
    const [memes,setMemes] = useState([]);
    const [loading,setLoading] = useState(true);
     
    const fetchMemes = async () =>  {
        try {
           const res = await axios.get("https://meme-api.com/gimme/wholesomememes");
             
           setMemes(res.data);
           setLoading(false); 
        } catch(error){
            console.error(error); 
        }
    };
    // loading ? <p>Loading.....</p> : null;
    loading && <p>Loading....</p>

    useEffect(() =>{
        fetchMemes();
    });

  return (
    <div>
        <div className='w-[500px]border-2' key={memes.id}>
            <img src="w-[500px]" src={memes.id} alt="" /></div> 
    </div>
  )
}

export default Memes
