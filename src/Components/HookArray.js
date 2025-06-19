import { useState } from "react"

function HookArray() {

    const[items,setItems]=useState([])

    // adds a new item (object) to the items array
    const addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }
        ])
    }
  return (
    <div>
      HookArray
      <button onClick={addItems}>Click</button>


{/* .map() iterates over each item in the items array */}
{/* for each item, it renders an <li> element showing item.value */}
      <ul>
        {items.map(items=>(
            <li >{items.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookArray
