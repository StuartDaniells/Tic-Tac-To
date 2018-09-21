import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import Winner from './Winner';

// Parent Component
class Game extends Component {
  constructor(){
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNum: 0,
      Xtrue: true
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNum +1) ;
    const latest = history[history.length -1];
    const squares = latest.squares.slice();

    if (Winner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.Xtrue ? 'X' : 'O' ;
    this.setState({
      history: history.concat([{
        squares: squares,
      }]) ,
      Xtrue: !this.state.Xtrue,
      stepNum: history.length
    });
  }

  jumpTo(steps){
    this.setState({
      stepNum: steps,
      Xtrue: (steps%2)===0
    });
  }

  render() {
    const history = this.state.history;
    const latest = history[this.state.stepNum];
    const PlayerWon = Winner(latest.squares);

    let status;
    if(PlayerWon){
      status = `The Winner is ${PlayerWon}`
    }else{
      status = `Next Players is - ${(this.state.Xtrue ? 'X' : 'O')}`;
    }

    const moves = history.map((values,move) => {
      const btn = move ? `Go to step: ${move}` : 'Start Over';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} > {btn} </button>
        </li>
      )
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {latest.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />,document.getElementById('root'));
