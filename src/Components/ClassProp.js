// import { Component } from 'react'

// export class ClassProp extends Component {
//     click=()=>{
//         alert(this.props.fname)
//     }
//   render() {
//     return (
//       <div>
//         <h1>Name:{this.props.fname}</h1>
//         <h2>Age:{this.props.age}</h2>
//         <button class="btn btn-primary" onClick={this.click}>
//                 Classprop
//         </button>
//       </div>
//     )
//   }
// }

// export default ClassProp



//Destructing Props
import { Component } from 'react'

export class ClassProp extends Component {
  render() {
    const {fname, age} = this.props
    
    return (
      <div>
          <h1>Name:{fname}</h1>
         <h2>Age:{age}</h2>
      </div>
    )
  }
}

export default ClassProp
