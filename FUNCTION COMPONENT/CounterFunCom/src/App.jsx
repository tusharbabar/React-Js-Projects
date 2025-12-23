import React,{useState} from "react";
import ReactDom from "react-dom";





let App=()=>{
  let [count,setCount]=useState(0)
  return <>
     <h1>Counter is {count}</h1>
     
     <input type="button" name="s" value="Increase Counter"  
     style={{height:"40px",width:"400px",background:"black", color:"white"}}
    onClick={()=>setCount(count+1)}/>
  </>
}



export default App;