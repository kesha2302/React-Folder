
function FChildcomp({ onIncrement }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  )
}

export default FChildcomp
