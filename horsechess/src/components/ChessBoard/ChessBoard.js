import React, { useState } from 'react';
import './ChessBoard.css'
import Knight from '../Knight/Knight';


const ChessBoard = () => {
  const initialKnightPositions = [1, 6, 57, 62];
  const [knightPositions, setKnightPositions] = useState(initialKnightPositions);
  const [selectedKnight, setSelectedKnight] = useState(null);
  const [validMoveOptions, setValidMoveOptions] = useState([]);

  const handleKnightClick = (position) => {
    if (knightPositions.includes(position)) {
      setSelectedKnight((prevSelected) => (prevSelected === position ? null : position));
      setValidMoveOptions(getAdditionalSquares(position));
    } else if (validMoveOptions.includes(position)) {
      const updatedPositions = knightPositions.map((pos) =>
        pos === selectedKnight ? position : pos
      );
      setKnightPositions(updatedPositions);
      setSelectedKnight(null);
      setValidMoveOptions([]);
    } else {
      setValidMoveOptions([]);
    }
  };

  const getAdditionalSquares = (position) => {
    const availableMoves = [position - 17, position - 15, position - 10, position - 6, position + 6, position + 10, position + 15, position + 17];
    const validMoves = availableMoves.filter(move => {
      const rowDiff = Math.abs(Math.floor(move / 8) - Math.floor(position / 8));
      const colDiff = Math.abs((move % 8) - (position % 8));
      return rowDiff + colDiff === 3 && move >= 0 && move < 64;
    });
    return validMoves;
  };
  
  const renderSquare = (i) => {
    const isDarkSquare = (i + Math.floor(i / 8)) % 2 === 1;
    const squareColor = isDarkSquare ? 'dark-square' : 'light-square';

    const isKnightPosition = knightPositions.includes(i);
    const isMoveOption = validMoveOptions.includes(i);

    const isSelected = selectedKnight === i || isMoveOption;

    return (
      <div
        key={i}
        className={`square ${squareColor} ${isKnightPosition ? 'knight-square' : ''} ${isMoveOption ? 'move-option' : ''} ${isSelected ? 'selected' : ''}`}
        onClick={() => handleKnightClick(i)}
      >
        {isKnightPosition ? <Knight /> : null}
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