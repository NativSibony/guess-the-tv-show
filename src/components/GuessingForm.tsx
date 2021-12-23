import React from "react";

const GuessingForm = () => {
  return (
    <div className="guessForm">
      <input
        type="text"
        className="guessLetter"
        maxLength={1}
        placeholder="Enter a letter . . . ⏎"
      />
      <button className="guessButton" style={{ width: "100%" }}>
        GUESS
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="guessButton">HINT</button>
        <button className="guessButton">STATISTICS</button>
      </div>
    </div>
  );
};

export default GuessingForm;
