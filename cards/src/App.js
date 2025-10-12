import React, { useState } from "react";
import "./App.css";

export default function App() {
  // Create 9 cards with initial color 'lightgray'
  const [cardColors, setCardColors] = useState(
    Array(9).fill("lightgray")
  );

  // Function to toggle color when a card is clicked
  const handleCardClick = (index) => {
    const newColors = [...cardColors];
    newColors[index] =
      newColors[index] === "lightgray" ? "skyblue" : "lightgray";
    setCardColors(newColors);
  };

  return (
    <div className="container">
      {cardColors.map((color, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: color }}
          onClick={() => handleCardClick(index)}
        >
          Card {index + 1}
        </div>
      ))}
    </div>
  );
}
