import React, { Component } from "react"
import './App.css'

class Counter extends Component {
    state = {
        value : 5
    }
    
    up = () =>{
      let newVal = this.state.value += 1
      this.setState({value : newVal})
    }
    down = () =>{
      let newVal = this.state.value -= 1
      this.setState({value : newVal})
      if (this.state.value <= 0) {
        this.setState({value : 0})
      }
    }
    render() {
      return (
        <div className="green_border tc btn btn-danger">
           <span>{this.state.value}</span>
           <button onClick={this.up}> + </button>
           <button onClick={this.down}> - </button>
         </div>
      );
    }
  }
  export default Counter