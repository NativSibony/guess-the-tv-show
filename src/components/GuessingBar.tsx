import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Movie } from "../utils/ApiController";

interface Props {
  movies: Movie[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const GuessingBar: React.FC<Props> = ({ movies, index, setIndex }) => {
  const [wordArray, setWordArray] = useState<string[][]>([]);

  useEffect(() => {
    const charArray = movies[index].word.map((w) => w.split(""));
    setWordArray(charArray);
  }, [index]);

  return (
    <ul className="word">
      {wordArray.length > 0
        ? wordArray.map((charArray, key) => (
            <div key={key}>
              {charArray.map((char, key) => (
                <li
                  key={key}
                  className={char === "_" ? "letter" : "letter correct"}
                >
                  {char === "_" ? "*" : char}
                </li>
              ))}
            </div>
          ))
        : "loading word..."}
    </ul>
  );
};

export default GuessingBar;
