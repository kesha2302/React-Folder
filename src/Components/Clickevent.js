
function Clickevent() {
    let name = "Patel Kesha"

    function click(){
        name = "Kinjal"
        alert(name)
    }
  return (
    <div>
      <h1>Event Handing in Functional Component</h1>
      <h3>{name}</h3>

      {/* <button class="btn bg-primary" onClick={click}>
              Click Me!
      </button> */}

            {/* <button class="btn bg-primary" onClick={()=>click()}>
              Click Me!
      </button> */}

            <button class="btn bg-primary" onClick={()=> alert(name)}>
              Click Me!
      </button>
    </div>
  )
}

export default Clickevent
