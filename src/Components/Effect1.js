import { useState,useEffect } from "react"

function Effect1() {
    const [count,setcount]= useState(0)

    useEffect(()=>{
        document.title=`Clicked ${count} times`
    })

  return (
    <div>
      Use Effect Hook...
      <h3>{count}</h3>
      <button className="btn-primary" onClick={()=>setcount(count+1)}>Click</button>
    </div>
  )
}

export default Effect1
