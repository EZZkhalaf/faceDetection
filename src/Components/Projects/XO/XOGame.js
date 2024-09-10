

import React, { useState } from "react";
import "./XOGame.css";

const XO = ({onRoutChange}) => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState("");
  
  const handleBoxClick = (index) => {
    if (isGameOver || board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setResult(`${turn} wins!`);
      setIsGameOver(true);
    } else if (checkDraw(newBoard)) {
      setResult("Draw!");
      setIsGameOver(true);
    } else {
      changeTurn();
    }
  };

  const changeTurn = () => {
    setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
  };

  const checkWin = (newBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return true;
      }
    }
    return false;
  };

  const checkDraw = (newBoard) => {
    return newBoard.every((box) => box !== "");
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setIsGameOver(false);
    setResult("");
  };

  return (
    <div className="container">
      <h1>Only for Practice</h1>
      <div className="choose2">
        <div className="choose">X</div>
        <div className="choose">O</div>
      </div>
      <br />
      <p id="player">Current Turn: {turn}</p>
      <div className="maing">
        {board.map((value, index) => (
          <div
            key={index}
            className="elements align"
            onClick={() => handleBoxClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <h2 id="result1">{result}</h2>
      {isGameOver && <div className="buttons">
        <button className="play-again" onClick={handlePlayAgain}>Play Again</button>
        <button className="play-again" onClick={() => onRoutChange('home')}>go home </button>
      </div>
      }
    </div>
  );
};

export default XO;
