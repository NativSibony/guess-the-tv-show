import React from "react";
import GuessingBar from "./GuessingBar";

interface Props {
  word: string[] | undefined;
  score: number;
  life: number;
}

const GuessingCard: React.FC<Props> = ({ word, score, life }) => {
  return (
    <div className="guess">
      {word!.length > 0 ? (
        <>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <h1>
              Score: {score}&emsp;Life: {life}
            </h1>
          </div>
          <GuessingBar word={word} />
        </>
      ) : null}
    </div>
  );
};

export default GuessingCard;
