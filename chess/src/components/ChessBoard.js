import { board } from "../data/board";
import Square from "./Square";

export default function ChessBoard() {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isDark = (rowIndex + colIndex) % 2 === 1;

          return (
            <Square
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              isDark={isDark}
            />
          );
        })
      )}
    </div>
  );
}
