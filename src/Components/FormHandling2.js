 import { useState } from "react"

function FormHandling2() {
    const[name, setName]= useState({

        firstname:"",
        lastname:""
    })

     const handlerSubmit = (e)=>{
        e.preventDefault();
         alert(`${name.firstname} ${name.lastname} `)
     }

  return (
    <div>
      FormHandling using Functional Component
      <form onSubmit={handlerSubmit}>

            <div class="form-group">
              <label for="">First Name:</label>
              <input type="text" value={name.firstname} 
              onChange={(e)=>setName({...name,firstname:e.target.value})}
              class="form-control" placeholder=""/>
            </div>

            <div class="form-group">
              <label for="">Last Name:</label>
              <input type="text" value={name.lastname} 
              onChange={(e)=>setName({...name,lastname:e.target.value})}
              class="form-control" placeholder=""/>
            </div>

            

            <button type='submit' className='btn-primary'>Submit</button>

        </form>

        <h4>FirstName:{name.firstname}</h4>
        <h4>LastName:{name.lastname}</h4>
    </div>
  )
}

export default FormHandling2
