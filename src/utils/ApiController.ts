import { getRandomInt } from "./General";

export type Movie = {
  name: string;
  original_name: string;
  original_language: string;
  title: string;
  popularity: number;
};

export const fetchMovies = async (key: string | undefined) => {
  const endpoint = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((movie: Movie) => {
    return {
      name: movie.name,
      original_name: movie.original_name,
      original_language: movie.original_language,
      title: movie.title,
      popularity: movie.popularity,
    };
  });
};
