import React from 'react';
import './ChessBoard.css'
import Knight from '../Knight/Knight';


const ChessBoard = () => {
  const renderSquare = (i) => {
    const isDarkSquare = (i + Math.floor(i / 8)) % 2 === 1;
    const squareColor = isDarkSquare ? 'dark-square' : 'light-square';

    const isKnightPosition = i === 1;
    const isKnightPosition2 = i === 6;
    const isKnightPosition3 = i === 57;
    const isKnightPosition4 = i === 62;


    return (
      <div key={i} className={`square ${squareColor}`}>
        {isKnightPosition || isKnightPosition2 ? <Knight /> : null} {isKnightPosition3 || isKnightPosition4 ? <Knight white/> : null} 
      </div>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }

  return <div className="chess-board">{squares}</div>;

};


export default ChessBoard;