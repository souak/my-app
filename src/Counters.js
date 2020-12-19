import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {
    state ={
        obj_arr : [{id:1}, {id:2}, {id:3}]
    }
    add_counter = () => {
        
        console.log(this.state.obj_arr[2]);
        // len += 1
        // this.setState({obj_arr : this.state.obj_arr.concat([{id : len}])})
        // console.log(this.state.obj_arr)
    }
    del_counter = (id) =>{
        let u = id - 1
        this.setState({obj_arr : this.state.obj_arr.slice(-u)})
        console.log(id);
    }
           
    render() {
        return (
            <div>
                <ul>
                    <button onClick={this.add_counter}>Add Counter</button>
                {this.state.obj_arr.map((item) => {
                    return(
                       <li key={item.id}>
                          <Counter/>
                          {item.id}
                          <button onClick={() => this.del_counter(item.id)}>Delete</button>
                          <button onClick={this.reset}>Reset</button>                              
                       </li>
                    );
                })}
                 <p>Number of Counters {this.state.obj_arr.length} </p>
                 {console.log(this.state.obj_arr)}
                </ul>               
                
            </div>
        );
    }
}