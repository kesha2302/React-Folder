import { useState,useEffect } from "react"

function Effect2() {
     const [count,setcount]= useState(0);
     const [count2,setcount2] = useState(1);

    useEffect(()=>{
        console.log('UseEffect Hooked called for count1')
    },[count])

        useEffect(()=>{
        console.log('UseEffect Hooked called for count2')
    },[count2])

  return (
    <div>
        Use Effect Hook...
      <h3>Count1:{count}</h3>
       <h3>Count2:{count2}</h3>
      <button className="btn-primary" onClick={()=>setcount(count+1)}>Counter1</button>
      <button className="btn-primary" onClick={()=>setcount2(count2+1)}>Counter2</button>
    </div>
  )
}

export default Effect2
