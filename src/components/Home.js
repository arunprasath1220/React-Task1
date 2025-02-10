import React, { Component } from 'react'

export class Home extends Component {
    
    constructor(){
        super()
        this.state={
            message:"Welcome to our page."
        }
    }

    changemessage(){
        this.setState({
            message:"Thankyou for subscribing."
        })
    }
    

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changemessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Home
