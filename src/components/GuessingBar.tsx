import React from "react";
import { Movie } from "../utils/ApiController";

interface Props {
  movies: Movie[];
}

const GuessingBar: React.FC<Props> = ({ movies }) => {
  return (
    <div className="guess">
      <ul className="word">
        <li className="letter correct">a</li>
        <li className="letter">*</li>
        <li className="letter correct">b</li>
        <li className="letter">*</li>
        <li className="letter">*</li>
      </ul>
    </div>
  );
};

export default GuessingBar;
