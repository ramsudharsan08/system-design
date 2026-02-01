import Square from "./Square";

function Board({ squares, onPlay }) {
  function handleClick(index) {
    if (squares[index]) return;

    const nextSquares = squares.slice();
    nextSquares[index] = onPlay.currentPlayer;
    onPlay.makeMove(nextSquares);
  }

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
