import { Component } from 'react'
import CChildcomp from './CChildcomp'

export class CParentcomp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentname : 'Parent'
      }

      this.helloparent = this.helloparent.bind(this)
    }

    // helloparent(){
    //     alert(`Hello ${this.state.parentname}`)
    // }

    // Passing a parameter when calling the parent method from the childcomp, for this arrow fun. will be used in child component 
    helloparent(childname){
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    
  render() {
    return (
      <div>
        {/*we are passing reference to the helloparent method as a prop called hellohandler */}
        <CChildcomp hellohandler = {this.helloparent}/>
      </div>
    )
  }
}

export default CParentcomp
