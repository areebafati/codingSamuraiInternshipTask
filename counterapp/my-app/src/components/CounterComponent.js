import React ,{useState} from 'react';
import "./File.css";

const  CounterComponent=() =>{
    const [num,setNum] = useState(0);
    const increase =()=>{
        setNum(num+1);
        
    };
    const decrease =()=>{
        setNum(num-1);
        
    };
    const reset =()=>{
        setNum(0);
        
    };


  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrement</button>
        
    
      
        


    </div>
  )
};
export default CounterComponent;

