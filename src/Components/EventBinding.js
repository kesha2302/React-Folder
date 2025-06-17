import { Component } from 'react'

export class EventBinding extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }

        // Approach 3:(bind in constructor)
        this.clickhandler = this.clickhandler.bind(this)
    }

    clickhandler(){
        this.setState({
            message:"Thank You!"
        })
    }

    clickhandler2 =()=>{
        this.setState({
            message:"Welcome to Innobrain..."
        })
    }
  render() {
    return (
      <div>
        EventBinding
        <h1>{this.state.message}</h1>

        {/* <button type="button" class="btn btn-primary" onClick={this.clickhandler} >Click</button> */}

        {/* Approach 1 */}
        {/* Binding in rebder method */}
        <button type="button" class="btn btn-primary" onClick={this.clickhandler.bind(this)} >Click1</button>


        {/* Approach 2 */}
        {/* Use arrow function */}
        <button type="button" class="btn btn-primary" onClick={()=>this.clickhandler()} >Click2</button>

        {/* APproach 3 */}
         <button type="button" class="btn btn-primary" onClick={this.clickhandler} >Click3</button>


        {/* Approach 4 */}
         <button type="button" class="btn btn-primary" onClick={this.clickhandler2} >Click4</button>
      </div>
    )
  }
}

export default EventBinding
