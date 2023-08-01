import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {

  const [gifts, setGifts] = useState(0);
  const{id,gift,image}=data[gifts];

  const previousGift =()=>{
    setGifts((gifts =>{
      gifts--;
      if(gifts < 0 ){
        return data.length - 1;
      }
      return gifts;
    }))

}
const nextGift =()=>{
  setGifts((gifts =>{
    gifts++;
    if(gifts > data.length-1){
      gifts = 0;
    }
    return gifts;
  }))
}

 
  return( <div>
    <div className="container">
      <h1> My wishing list</h1>
    </div>

     <div className="container">
      <img src={image} width="500px"alt="laptop"/>
     </div>


     <div className="container">
      <h2>{id} - {gift}</h2>
    </div>
    <div className="btn container">
      <button onClick={previousGift}> Previous</button>
        <button onClick={nextGift}> Next</button>
    </div>

 

  </div>)
    
  
}

export default App;
