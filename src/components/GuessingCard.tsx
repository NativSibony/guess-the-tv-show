import React, { Dispatch, SetStateAction } from "react";
import { Movie } from "../utils/ApiController";
import GuessingBar from "./GuessingBar";

interface Props {
  movies: Movie[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const GuessingCard: React.FC<Props> = ({ movies, index, setIndex }) => {
  return (
    <div className="guess">
      {movies.length > 0 ? (
        <GuessingBar movies={movies} index={index} setIndex={setIndex} />
      ) : null}
    </div>
  );
};

export default GuessingCard;
