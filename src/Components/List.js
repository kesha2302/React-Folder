
function List() {

    const names =['Riya','Jay','Kirti','Abhi','Riya']

    const namelist = names.map((name,index)=><h4 key={index}>{index}{name}</h4>)

  return (
    <div>
      {/* <h4>{names[0]}</h4>
      <h4>{names[1]}</h4>
      <h4>{names[2]}</h4>
      <h4>{names[3]}</h4> */}

      {namelist}
       
    </div>
  )
}

export default List
