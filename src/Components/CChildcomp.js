
function CChildcomp(props) {
    return (
      <div>
        <button onClick={props.hellohandler}>Welcome Parent</button>

        <button onClick={() =>  props.hellohandler('chil1')}>Welcome Parent2</button>
      </div>
    )
  }
  
  export default CChildcomp
  