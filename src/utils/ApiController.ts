import { makeGuessingWord, shuffleArray } from "./PreProcess";

export type Movie = {
  nameArr: string[];
  name: string;
  original_name: string;
  original_language: string;
  overview: string;
  word: string[];
};

export const fetchMovies = async (key: string | undefined) => {
  try {
    const endpoint = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`;
    const data = await (await fetch(endpoint)).json();
    return shuffleArray(
      data.results.map((movie: Movie) => {
        return {
          nameArr: movie.name.replace("'", "").toLowerCase().split(" "),
          original_name: movie.original_name,
          original_language: movie.original_language,
          overview: movie.overview
            .toLowerCase()
            .replace(movie.name.toLowerCase(), "*****"),
          word: makeGuessingWord(movie.name),
        };
      })
    );
  } catch (error) {
    console.error(error);
  }
};
