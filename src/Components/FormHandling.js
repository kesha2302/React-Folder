import { Component } from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

export class FormHandling extends Component {

    constructor(){
        super()
        this.state={
            name:"",
            comment:"",
            topic:"React"
        }
    }

    handleName =(event)=>{
        this.setState({
            name:event.target.value
        })
    }

      handleComment =(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
      handleTopic =(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handlerSubmit=(event)=>{
        alert(`${this.state.name} ${this.state.comment} ${this.state.topic}`)

        event.preventDefault()
    }
  render() {
    return (
      <div>
        FormHandling in Class Component

        <form onSubmit={this.handlerSubmit}>

            <div class="form-group">
              <label for="">Name:</label>
              <input type="text" value={this.state.name} 
              onChange={this.handleName}
              class="form-control" placeholder=""/>
            </div>

            <div class="form-group">
              <label for="">Comment:</label>
              <input type="text" value={this.state.comment} 
              onChange={this.handleComment}
              class="form-control" placeholder=""/>
            </div>

            <div class="form-group">
              <label for="">Topics:</label>
              <select  value={this.state.topic} 
              onChange={this.handleTopic}
              class="form-control">
                <option value="React">React</option>
                <option value="Laravel">Laravel</option>
                <option value="Vue">Vue</option>
              </select>
            </div>

            <button type='submit' className='btn-primary'>Submit</button>

        </form>
      </div>
    )
  }
}

export default FormHandling
