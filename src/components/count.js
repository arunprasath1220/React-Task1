import React, { Component } from 'react'

export class count extends Component {
    constructor(){
        super()
            this.state= {
                count: 0
        }
    }
    changecount(){
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <h3>Count-{this.state.count}</h3>
        <button onClick={() => this.changecount()}>Increment</button>
      </div>
    )
  }
}

export default count
