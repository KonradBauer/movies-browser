import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchConfiguration } from "../configurationSlice";
import { fetchGenres } from "../movies/genresSilce";
import { fetchMovies } from "../movies/movie/moviesSlice";
import { fetchPeople } from "../peoples/people/peopleSlice";
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
  const searchRestoredRef = useRef(false);

  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  const searchTextMovies = useSelector(selectSearchMoviesText);
  const searchPeopleStatus = useSelector(selectSearchPeopleStatus);
  const searchTextPeople = useSelector(selectPeopleSearchText);

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
    dispatch(fetchMovies());
    dispatch(fetchPeople());
  }, [dispatch]);

  useEffect(() => {
    if (searchRestoredRef.current) return;
    searchRestoredRef.current = true;

    if (searchMoviesStatus === "initial" && searchTextMovies) {
      dispatch(fetchSearchMovies());
    }
    if (searchPeopleStatus === "initial" && searchTextPeople) {
      dispatch(fetchSearchPeople());
    }
  }, [dispatch, searchMoviesStatus, searchPeopleStatus, searchTextMovies, searchTextPeople]);
};
