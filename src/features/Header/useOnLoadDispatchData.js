import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchConfiguration } from "../configurationSlice";
import { fetchGenres } from "../movies/genresSilce";
import { fetchMovies } from "../movies/movie/moviesSlice";
import { fetchMovieDetailsAndCredits } from "../movies/movieDetails/movieDetailsAndCreditsSlice";
import { fetchPeople } from "../peoples/people/peopleSlice";
import { fetchPeopleDetails } from "../peoples/peopleDetails/peopleDetailsSlice";
import {
  fetchSearchMovies,
  selectSearchMoviesStatus,
  selectSearchMoviesText,
} from "../movies/searchMoviesSlice";
import {
  fetchSearchPeople,
  selectPeopleSearchText,
  selectSearchPeopleStatus,
} from "../peoples/searchPeopleSlice";

export const useOnLoadDispatchData = () => {
  const dispatch = useDispatch();

  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  const searchTextMovies = useSelector(selectSearchMoviesText);
  const searchPeopleStatus = useSelector(selectSearchPeopleStatus);
  const searchTextPeople = useSelector(selectPeopleSearchText);

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
    dispatch(fetchMovies());
    dispatch(fetchMovieDetailsAndCredits());
    dispatch(fetchPeople());
    dispatch(fetchPeopleDetails());

    if (searchMoviesStatus === "initial" && searchTextMovies !== "") {
      dispatch(fetchSearchMovies());
    }
    if (searchPeopleStatus === "initial" && searchTextPeople !== "") {
      dispatch(fetchSearchPeople());
    }
  }, [dispatch]);
};
