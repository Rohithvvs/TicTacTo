import React, { useState } from 'react';
import './App.css';

const TicTacTo = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);
  const [current, setCurrent] = useState('x');

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  };

  const handleClickSquare = (index) => {
    if (!winner && !board[index]) {
      let newBoard = [...board];
      newBoard[index] = current;
      setBoard(newBoard);
      checkWinner();
      setCurrent(current === 'x' ? 'o' : 'x');
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClickSquare(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setCurrent('x');
  };

  return (
    <div className="App">
      <div>Tic Tac Toe</div>
      <div className="board">
        {board.map((square, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
      </div>
      <div>
        {winner && <h2>Winner: {winner}</h2>}
        {!winner && board.every((square) => square !== '') && <h2>It's a draw</h2>}
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

export default TicTacTo;
