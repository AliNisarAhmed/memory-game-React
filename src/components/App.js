import React, { Component } from 'react';
import initialState from '../initialState/initialState';

import shuffle from '../helperFunctions/shuffle';

import Board from './Board';

class App extends Component {
  state = {
    symbols: shuffle(initialState),
    faceupCards: 0,
    guessedCards: 0,
  }

  componentDidUpdate() {
    if (this.state.faceupCards >= 2) {
      // setTimeout(this.checkForGuess, 500);
      this.checkForGuess();
    }
  }

  handleClick = (id) => {
    let symbols = this.state.symbols.map(symbol => {
      if (symbol.id === id) {
        symbol.faceup = !symbol.faceup;
      }
      return symbol;
    });
    this.setState({ symbols });
    this.setState((state) => ({ faceupCards: state.faceupCards + 1}))
  }

  checkForGuess = () => {
    console.log('checking for guesses');
    this.setState({ faceupCards: 0 });
    let [ first, second ] = this.state.symbols.filter(symbol => symbol.faceup && !symbol.guessed);
    console.log(first);
    console.log(second);
    // let remaining = this.state.symbols.filter(symbol => !symbol.faceup);
    
    if (first.value === second.value) {
      this.setState((state) => ({ guessedCards: state.guessedCards + 2 }));
      let temp = this.state.symbols.map(symbol => {
        if (symbol.id === first.id || symbol.id === second.id) {
          symbol.guessed = true;
        }
        return symbol;
      });
      this.setState({ symbols: temp });
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
    return (
      <div className="App">
        <Board symbols={this.state.symbols} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
