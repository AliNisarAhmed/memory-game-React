import React, { Component } from 'react';
import './App.scss';
import initialState from './initialState/initialState';

import Board from './Board';

class App extends Component {
  state = {
    symbols: initialState
  }

  handleClick = (id) => {
    let symbols = [...this.state.symbols.map(symbol => {
      if (symbol.id === id) {
        symbol.faceup = !symbol.faceup;
      }
      return symbol;
    })];
    this.setState({ symbols });
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
