import { useState} from "react"
import Effectprop from "./Effectprop";

function Effect3() {
     const [count,setcount]= useState(0);
     const [count2,setcount2] = useState(1);
  return (
    <div>
      Effect3
      <Effectprop count={count} count2={count2}/>

     <button className="btn-primary" onClick={()=>setcount(count+1)}>Counter1</button>
      <button className="btn-primary" onClick={()=>setcount2(count2+1)}>Counter2</button>
    </div>
  )
}

export default Effect3
