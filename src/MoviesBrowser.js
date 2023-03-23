import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { Content } from "./layouts/Contents/index";
import { fetchPeople } from "./features/peoples/people/peopleSlice";
import { fetchGenres } from "./features/movies/genresSilce";
import { fetchConfiguration } from "./features/configurationSlice";

function MoviesBrowser() {
  

  return <Content />;
}

export default MoviesBrowser;
