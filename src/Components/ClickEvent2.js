import { Component } from 'react'

export class ClickEvent2 extends Component {
    
    click(){
let name= "kesha"
alert(name)
    }
  render() {
    let name = "kinjal";
    return (
      <div>
        <h1>Event Handling in Class Component.</h1>
        <h3>{name}</h3>

        <button class="btn bg-primary" onClick={this.click}>
                Click
        </button>
      </div>
    )
  }
}

export default ClickEvent2
