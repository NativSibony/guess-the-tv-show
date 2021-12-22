import React from "react";
import { Movie } from "../utils/ApiController";
import GuessingBar from "./GuessingBar";

interface Props {
  movies: Movie[];
}

const GuessingCard: React.FC<Props> = ({ movies }) => {
  console.log(movies);
  return (
    <div>{movies.length > 0 ? <GuessingBar movies={movies} /> : null}</div>
  );
};

export default GuessingCard;
