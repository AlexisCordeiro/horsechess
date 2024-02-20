import React from 'react';
import './ChessBoard.css' 


const ChessBoard = () => {
    const renderSquare = (i) => {
      const isDarkSquare = (i + Math.floor(i / 8)) % 2 === 1;
      const squareColor = isDarkSquare ? 'dark-square' : 'light-square';
  
      return <div key={i} className={`square ${squareColor}`}></div>;
    };
  
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i));
    }
  
    return (
      <div className="chess-board">
        {squares}
      </div>
    );
  };

export default ChessBoard;