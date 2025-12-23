import { useState } from "react";

function App(){
  let [count,setCount]=useState(0);
  return(
  <div style={{textAlign:"center",marginTop:"40px"}}>
    
      <h2>Counter:{count}</h2>

      <button onClick={()=>setCount(count+1)}> + Increment </button>

      <button onClick={()=>setCount(count+1)}> - Decriment</button>

      <button onClick={()=>setCount(0)}> Reset</button>
     </div>
  )
}
export default App;