import React, { Component } from 'react';
import classNames from 'classnames';
import initialState, { generateFreshSymbols } from '../initialState/initialState';

import shuffle from '../helperFunctions/shuffle';
import formatTime from '../helperFunctions/formatTime'
import incrementTimer from '../helperFunctions/incrementTimer';

import Board from './Board';

class App extends Component {
  state = {
    symbols: shuffle(initialState),
    faceupCards: 0,
    guessedCards: 0,
    moves: 0,
    timerId: null,
    timer: [0, 0]
  }

  componentDidUpdate() {
    if (this.state.faceupCards >= 2) {
      this.checkForGuess();
    }
  }

  restartGame = () => {
    clearInterval(this.state.timerId);
    this.setState({
      symbols: shuffle(generateFreshSymbols()),
      faceupCards: 0,
      guessedCards: 0,
      moves: 0,
      timerId: null,
      timer: [0, 0]
    })
  }

  checkForWin = () => {
    if (this.state.guessedCards === 16) {
      clearInterval(this.state.timerId);
    }
  }

  startTimer = () => {
    let timerId = setInterval(this.runTimer, 1000);
    this.setState({timerId});
  }

  runTimer = () => {
    let newTimer = incrementTimer(this.state.timer);
    this.setState({timer: newTimer});
  }

  handleClick = (id) => {
    if (this.state.moves === 0) {
      this.startTimer();
    }
    let symbols = this.state.symbols.map(symbol => {
      if (symbol.id === id) {
        symbol.faceup = !symbol.faceup;
      }
      return symbol;
    });
    this.setState({ symbols });
    this.setState((state) => ({ faceupCards: state.faceupCards + 1, moves: state.moves + 1}))
  }

  checkForGuess = () => {
    console.log('checking for guesses');
    this.setState({ faceupCards: 0 });
    let [ first, second ] = this.state.symbols.filter(symbol => symbol.faceup && !symbol.guessed);
    console.log(first);
    console.log(second);
    // let remaining = this.state.symbols.filter(symbol => !symbol.faceup);
    
    if (first && second && first.value === second.value) {
      this.setState((state) => ({ guessedCards: state.guessedCards + 2 }));
      let temp = this.state.symbols.map(symbol => {
        if (symbol.id === first.id || symbol.id === second.id) {
          symbol.guessed = true;
        }
        return symbol;
      });
      this.setState({ symbols: temp }, this.checkForWin);
    } else {
      setTimeout(() => {
        let temp = this.state.symbols.map(symbol => {
          if (symbol.id === first.id || symbol.id === second.id) {
            symbol.faceup = false;
          }
          return symbol;
        })
        this.setState({ symbols: temp });

      }, 600);
    }
  }

  render() {
    let restartClass = classNames({
      restart: true,
      restartAnimation: this.state.guessedCards === 16
    });

    let timerClass = classNames({
      timer: true,
      timerWin: this.state.guessedCards === 16
    });

    return (
      <React.Fragment>
        <h1 className="title">Memory Game</h1>
        <div className="App">
          <div className="stats">
            <span className={timerClass}>Time: <span>{formatTime(this.state.timer)}</span></span>
            <button className={restartClass} onClick={this.restartGame}>Restart Game</button>
            <span className={timerClass}>Moves: <span>{this.state.moves}</span></span>
          </div>
          <Board symbols={this.state.symbols} handleClick={this.handleClick}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
