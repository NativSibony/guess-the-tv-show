import { getRandomInt, makeGuessingWord } from "./PreProcess";

export type Movie = {
  name: string;
  original_name: string;
  original_language: string;
  popularity: number;
  word: string[];
};

export const fetchMovies = async (key: string | undefined) => {
  try {
    const endpoint = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((movie: Movie) => {
      return {
        name: movie.name.replace("'", ""),
        original_name: movie.original_name,
        original_language: movie.original_language,
        popularity: movie.popularity,
        word: makeGuessingWord(movie.name),
      };
    });
  } catch (error) {
    console.error(error);
  }
};
