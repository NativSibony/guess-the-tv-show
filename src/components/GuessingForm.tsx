import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Movie } from "../utils/ApiController";

interface Props {
  movies: Movie[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  match: boolean;
  setMatch: Dispatch<SetStateAction<boolean>>;
  word: string[];
  setWord: Dispatch<SetStateAction<string[]>>;
}

const GuessingForm: React.FC<Props> = ({
  movies,
  index,
  setIndex,
  match,
  setMatch,
  word,
  setWord,
}) => {
  const guessRef = useRef<HTMLInputElement>(null);

  const handleGuess = () => {
    const letter: string | false | undefined =
      guessRef.current?.value.trim() === ""
        ? false
        : guessRef.current?.value.toLowerCase();
    lookForMatch(letter);
  };

  const lookForMatch = (letter: string | false | undefined) => {
    let copyArr = word.slice();
    movies[index].nameArr.map((name: string, j) => {
      let w = movies[index].word[j];
      for (let i = 0; i < name.length; i++) {
        if (name[i] === letter && w[i] === "_") {
          copyArr[j] =
            word[j].substring(0, i) + letter + word[j].substring(i + 1);
          setMatch(true);
        }
      }
      setWord(copyArr);
    });
  };

  useEffect(() => {
    if (match) {
      //pop sucess message
      setMatch(false); //reset match
    }
  }, [match]);

  useEffect(() => {
    if (movies.length > 0)
      //a word with spaces as array
      setWord(movies[index].word);
  }, [index]);

  return (
    <div className="guessForm">
      <input
        ref={guessRef}
        type="text"
        className="guessLetter"
        maxLength={1}
        placeholder="Enter a letter . . . ⏎"
      />
      <button
        onClick={handleGuess}
        className="guessButton"
        style={{ width: "100%" }}
      >
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
