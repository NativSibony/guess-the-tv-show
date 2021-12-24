import React, { useEffect, useState } from "react";
import { fetchMovies, Movie } from "./utils/ApiController";
import "./styles/style.css";
import GuessingCard from "./components/GuessingCard";
import GuessingForm from "./components/GuessingForm";

const API_KEY = process.env.REACT_APP_API_KEY;
const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState<number>(0);
  /* Getting the movie list from our api controller */
  useEffect(() => {
    fetchMovies(API_KEY).then((res) => setMovies(res));
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <img alt="tvlogo" src="/tv128.png"></img>
        <div className="Header subtitle">
          <h1>Guess</h1>
          <h2>The TV Show Name</h2>
        </div>
      </div>
      <div className="Content">
        <GuessingCard movies={movies} index={index} setIndex={setIndex} />
      </div>
      <div className="Footer">
        <GuessingForm />
      </div>
    </div>
  );
};

export default App;
