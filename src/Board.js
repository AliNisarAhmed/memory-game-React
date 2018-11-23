import React from 'react'
import Square from './Square';
import './board.scss';

export default function Board({ symbols, handleClick }) {
  return (
    <div className="board">
      {
        symbols.map(symbol => 
          <Square value={symbol.value} id={symbol.id} faceup={symbol.faceup} handleClick={handleClick}/>
        )
      }
    </div>
  )
}
