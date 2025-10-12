import React, { useState } from "react";
import "./App.css";

const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

export default function App() {
  const [players, setPlayers] = useState([
    { id: 1, pos: 1, color: "green" },
    { id: 2, pos: 1, color: "red" },
  ]);
  const [turn, setTurn] = useState(0); // index of current player
  const [dice, setDice] = useState(1);
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    setMessage("");

    setPlayers((prev) => {
      const newPlayers = [...prev];
      const current = newPlayers[turn];
      let newPos = current.pos + roll;

      if (newPos > 100) {
        setMessage(`🎯 Need exact roll to win!`);
        setTurn((turn + 1) % 2);
        return newPlayers;
      }

      // Check for snakes and ladders
      if (snakes[newPos]) {
        setMessage(`🐍 Player ${current.id} bitten! ${newPos} → ${snakes[newPos]}`);
        newPos = snakes[newPos];
      } else if (ladders[newPos]) {
        setMessage(`🪜 Player ${current.id} climbs! ${newPos} → ${ladders[newPos]}`);
        newPos = ladders[newPos];
      } else {
        setMessage(`Player ${current.id} moved to ${newPos}`);
      }

      current.pos = newPos;

      if (newPos === 100) {
        setMessage(`🎉 Player ${current.id} wins the game!`);
      } else {
        setTurn((turn + 1) % 2);
      }

      return newPlayers;
    });
  };

  const renderBoard = () => {
    const cells = [];
    for (let i = 100; i > 0; i--) {
      const playerTokens = players
        .filter((p) => p.pos === i)
        .map((p) => (
          <div
            key={p.id}
            className="token"
            style={{ backgroundColor: p.color }}
          ></div>
        ));

      cells.push(
        <div key={i} className="cell">
          <span className="num">{i}</span>
          {playerTokens}
          {/* show snake or ladder icons */}
          {snakes[i] && <span className="snake">🐍</span>}
          {ladders[i] && <span className="ladder">🪜</span>}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="container">
      <h1>🎲 Snake & Ladder (2-Player)</h1>
      <p>Current Turn: Player {players[turn].id} ({players[turn].color})</p>
      <div className="board">{renderBoard()}</div>

      <div className="info">
        <p>Dice Roll: {dice}</p>
        <button onClick={rollDice} disabled={players.some((p) => p.pos === 100)}>
          Roll Dice
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}
