import { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn:true
        }
    }
  render() {
   
    // Apporach1 : if/else
    // if(this.state.isLoggedIn){
    //     return(<h3>Welcome</h3>)
    // } else{
    //     return(<h3>Plese Login</h3>)
    // }


    // Approach2: Element Variable
    // let message
    // if(this.state.isLoggedIn){
    //     message=<h3>Hello</h3>
    // }else{
    //     message = <h3>Plese Login</h3>
    // }

    // return <div>{message}</div>



    // Approach 3: Ternary Condition
    // return(this.state.isLoggedIn?(<h3>Hii</h3>):(<h3>Bye!</h3>))


    // Approach 4: Short Circuit Operator
    return this.state.isLoggedIn && <h3>Hello...</h3>

  }
}

export default ConditionalRendering
