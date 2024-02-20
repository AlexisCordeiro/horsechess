import React, { useState } from 'react';
import './ChessBoard.css'
import Knight from '../Knight/Knight';


const ChessBoard = () => {
  const knightPositions = [1, 6, 57, 62];
  const [selectedKnight, setSelectedKnight] = useState(null);

  const handleKnightClick = (position) => {
    if (knightPositions.includes(position)) {
      setSelectedKnight((prevSelected) => (prevSelected === position ? null : position));
    }
  };

  const renderSquare = (i) => {
    const isDarkSquare = (i + Math.floor(i / 8)) % 2 === 1;
    const squareColor = isDarkSquare ? 'dark-square' : 'light-square';

    const isKnightPosition = knightPositions.includes(i);
    const isWhiteKnight = [57, 62].includes(i);

    const isSelected = selectedKnight === i;

    return (
      <div
        key={i}
        className={`square ${squareColor} ${isKnightPosition ? 'knight-square' : ''} ${isWhiteKnight ? 'white-knight' : ''} ${isSelected ? 'selected' : ''}`}
        onClick={() => handleKnightClick(i)}
      >
        {isKnightPosition ? <Knight white={isWhiteKnight} /> : null}
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