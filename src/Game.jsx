import './App.css';
import './index.css';
import React from 'react';
import  {Button,TextField} from '@material-ui/core';


class Square extends React.Component {

  render() { 
    console.log(this.state);   
    return (
      <div>
      <button className="square" onClick={this.props.is_clicked}>
       {this.props.val}
      </button>
      </div>
      
    );
  }
}

class Board extends React.Component {

  state = {
    squers : [null, null, null, null, null, null, null, null, null],
    x_o_sign: true

  }

  renderSquare(i) {
    return <Square val={this.state.squers[i]} is_clicked={() => this.handleClick(i)} />;
  }
  handleClick(i) {
    if (this.props.user1 === null || this.props.user2 === null) {
      this.setState({squares: Array(9).fill(null)})
    }else{
      const temp_squares = this.state.squers.slice();
      this.state.x_o_sign ? temp_squares[i] = 'X' : temp_squares[i] = 'O'
  
      if (this.state.squers[i] == null ) {                       // this will prevent of  squers[] values collision 
        this.setState({squers: temp_squares})
        let status = ! this.state.x_o_sign
        this.setState({x_o_sign : status})    
      } 
    } 
     
  }

  define_winer = (i) =>{    
    var tmp = i
      var winer = null
      if (tmp === "X") {
        winer = this.props.user1
      }
      else{
        winer = this.props.user2
      }
      return winer
  }

  calculateWinner = () =>{
    const win_check = this.state.squers.slice();
    if((win_check[0] === 'X' && win_check[1] === 'X' && win_check[2] === 'X') || (win_check[0] === 'O' && win_check[1] === 'O' && win_check[2] === 'O')) {
      document.getElementById("sp").innerHTML = this.define_winer(win_check[0])    
    }
    else if((win_check[3]=== 'X' && win_check[4]=== 'X' && win_check[5] === 'X') || (win_check[3]=== 'O' && win_check[4]=== 'O' && win_check[5] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[3]) 
    }
    else if((win_check[6]=== 'X' && win_check[7]=== 'X' && win_check[8] === 'X') || (win_check[6]=== 'O' && win_check[7]=== 'O' && win_check[8] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[6]) 
    }
    else if((win_check[0]=== 'X' && win_check[3]=== 'X' && win_check[6] === 'X') || (win_check[0]=== 'O' && win_check[3]=== 'O' && win_check[6] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[0]) 
    }
    else if((win_check[1]=== 'X' && win_check[4]=== 'X' && win_check[7] === 'X') || (win_check[1]=== 'O' && win_check[4]=== 'O' && win_check[7] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[1]) 
    }
    else if((win_check[2]=== 'X' && win_check[5]=== 'X' && win_check[8] === 'X') || (win_check[2]=== 'O' && win_check[5]=== 'O' && win_check[8] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[2]) 
    }
    else if((win_check[0]=== 'X' && win_check[4]=== 'X' && win_check[8] === 'X') || (win_check[0]=== 'O' && win_check[4]=== 'O' && win_check[8] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[0]) 
    }
    else if((win_check[2]=== 'X' && win_check[4]=== 'X' && win_check[6] === 'X') || (win_check[2]=== 'O' && win_check[4]=== 'O' && win_check[6] === 'O')){
      document.getElementById("sp").innerHTML = this.define_winer(win_check[2]) 
    }
  }

  render() {

    this.calculateWinner() 
    const status = "It's : " + (this.state.x_o_sign ? this.props.user1 : this.props.user2) + " Turn"
    return (
      <div className="main_board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <p id="winer">The winer is : <span id="sp"></span></p>
      </div>
    );
  }
}

class Game extends React.Component {

  state = {
    name1 : null,
    name2 : null
  }
  
  start = () =>{
    var name1 = document.getElementById("outlined-basic").value ;
    var name2 = document.getElementById("outlined").value ;
    
    if (name1 === "" && name2 === "") {
      alert("Enter the name first")
      return;      
    }
    var users = `${name1} VS ${name2}`;
    this.setState({name1 : name1})
    this.setState({name2 : name2})
    document.getElementById("bnt_start").style.display = 'none';
    document.getElementById("one").style.display = 'none';
    document.getElementById("user").innerHTML = users;    
  }

  render() {
    
    return (
      <div>
        <div className="players">
        <p id="user"></p>
        <Button id="bnt_start" variant="contained" color="primary" onClick={this.start}>
         Please enter your names
        </Button><br/><br/><br/>
        <form id="one" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Playesr 1" variant="outlined"  />
          <TextField id="outlined" label="Playesr 2" variant="outlined" />
        </form> 
              
      </div>
        {/* <Players/> */}
        <div className="game">
        <div className="game-board">          
          <Board user1={this.state.name1} user2={this.state.name2} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Game
