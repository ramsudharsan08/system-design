import { useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./utils/calculateWinner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const currentPlayer = isXNext ? "X" : "O";

  function makeMove(nextSquares) {
    if (winner) return;
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="app">
      <h2>Tic Tac Toe</h2>

      <p>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${currentPlayer}`}
      </p>

      <Board
        squares={squares}
        onPlay={{ currentPlayer, makeMove }}
      />

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
