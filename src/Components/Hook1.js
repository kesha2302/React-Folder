import React, { useState} from 'react'

function Hook1() {
    const initailcount = 0
    const [data,setdata] = useState(initailcount);
     
    function handClick(){
        setdata(data+1)
    } 
    
    const incefive =()=>{
        for(let i=0;i<5;i++){
            setdata(prevcount => prevcount +1)
        }
    }

  return (
    <div>
      <h1>UseSatae Hook</h1>
      <h2>{data}</h2>
      {/* <button  class="btn btn-primary" onClick={handClick}>Click</button> */}
     <button  class="btn btn-primary" onClick={()=>setdata(data+1)}>Incerement</button>
     <button  class="btn btn-primary" onClick={()=>setdata(data-1)}>Decerement</button>

      <button  class="btn btn-primary" onClick={incefive}>Increment 5</button>
    </div>
  )
}

export default Hook1
