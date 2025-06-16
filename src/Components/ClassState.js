import { Component } from 'react'

export class ClassState extends Component {

    constructor(){
        super()
        this.state={
            message:"Welcome to Innobrain.."
        }
    }

    // Method
    Changemessage(){
        this.setState({
            message:"Hello.."
        })
    }
  render() {
    return (
      <div>
        <h1>This is state in Class Component</h1>
        <h2>{this.state.message}</h2>

        <button class="btn btn-primary" onClick={()=> this.Changemessage()}>Click</button>
      </div>
    )
  }
}

export default ClassState
