import { useEffect } from "react"

function Effectprop({count, count2}) {
    useEffect(()=>{
            console.log('UseEffect Hooked called for count2')
        },[count2])
    
  return (
    <div>
      Effectprop
       <h3>Count1:{count}</h3>
       <h3>Count2:{count2}</h3>
    </div>
  )
}

export default Effectprop
