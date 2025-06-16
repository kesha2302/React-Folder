
// function FunProp(props) {
//   return (
//     <div>



//       <h1>Firstname:{props.fname}</h1>
//       <h2>Age:{props.age}</h2>
//       <h3>Email:{props.other.email}</h3>
//     </div>
//   )
// }

// export default FunProp

// Destructing props
// First Approach

// function FunProp({fname,age,other}) {
//   return (
//     <div>
//       <h1>Firstname:{fname}</h1>
//      <h2>Age:{age}</h2>
//       <h3>Email:{other.email}</h3>
//     </div>
//   )
// }

// export default FunProp



// Second Approach
function FunProp(props) {
    const{fname, age, other} = props
  return (
    <div>
       <h1>Firstname:{fname}</h1>
     <h2>Age:{age}</h2>
      <h3>Email:{other.email}</h3>
    </div>
  )
}

export default FunProp
