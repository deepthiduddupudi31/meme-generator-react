import nature from './nature.jpeg';
import { useEffect, useState } from 'react'
export default function Mainpart()
{
    
    const [memeImages,setmemeImages]=useState([]);
     const [memeText,setmemeText]=useState({
        topText:"",
        bottomText:"",
        randomImg:"https://i.imgflip.com/1bij.jpg"
     })
     function handleInput(e)
     {
          const {name,value}=e.target;
          setmemeText((prevmeme)=>{
            return{
                ...prevmeme,
                [name]:value
            }
          })

     }
     useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=>setmemeImages(data.data.memes))

     },[])
     function handleChange()
     {
        const randomnumber=Math.floor(Math.random()*memeImages.length)
        const url=(memeImages[randomnumber].url)
        setmemeText((prevText)=>{
            return{
                ...prevText,
                randomImg:url
            }
        })
     }
     return(
        <div className="Mainpart">
            <form>
                <input  type="text"
                 placeholder="Top Text"
                 class="top-text" 
                 onChange={handleInput}
                 name="topText"
                 value={memeText.topText}/>
                <input  type="text" 
                placeholder="Bottom Text" 
                class="bottom-text" 
                onChange={handleInput}
                name="bottomText"
                value={memeText.bottomText}/>
                <br></br>
                <br></br>
                </form>
                <button onClick={handleChange}>Get a meme Image</button>
                <br></br>
                <div className="meme">
                <img className="meme--image"  src={memeText.randomImg}></img>
                <h3 className="meme--text top">{memeText.topText}</h3>
                <h3 className="meme--text bottom">{memeText.bottomText}</h3>
                </div>
                
                
           
        </div>
     )
}