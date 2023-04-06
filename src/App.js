import React from "react";
import { HashRouter, Route, Redirect, Switch, NavLink } from "react-router-dom";
import { HeadContainer, MoviesButton, PeopleButton } from "./layouts/Header/styled";
import { PersonDetails } from "./layouts/PersonDetails/index";
import { MoviesDetails } from "./layouts/MoviesDetails/index";
import { Loading } from "./layouts/Loading/index";
import { ThemeProvider } from "styled-components";
import { Search } from "./layouts/Search/index";
import { theme } from "./common/Theme/theme";
import { StyledNavLink } from "./StyledApp";
import { StyledLogo, Box, StyledLoupe, ButtonsBox } from "./layouts/Header/styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moviesPageFirst,
  selectMovieID,
  selectMoviesStatus,
} from "./features/movies/movie/moviesSlice";
import {
  peoplePageFirst,
  selectPeopleID,
  selectPeopleStatus,
} from "./features/peoples/people/peopleSlice";
import {
  fetchMovieDetailsAndCredits,
  selectMovieDetailsStatus,
} from "./features/movies/movieDetails/movieDetailsAndCreditsSlice";
import {
  fetchPeopleDetails,
  selectPeopleDetailsStatus,
} from "./features/peoples/peopleDetails/peopleDetailsSlice";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { fetchPeople } from "./features/peoples/people/peopleSlice";
import { fetchGenres } from "./features/movies/genresSilce";
import { fetchConfiguration } from "./features/configurationSlice";
import {
  changeMoviesSearchText,
  selectSearchMoviesStatus,
} from "./features/movies/searchMoviesSlice";
import { fetchSearchMovies, selectSearchMoviesText } from "./features/movies/searchMoviesSlice";
import Input from "./layouts/Input";
import {
  fetchSearchPeople,
  selectSearchPeopleStatus,
  selectPeopleSearchText,
} from "./features/peoples/searchPeopleSlice";
import { Error } from "./layouts/Error";
import MoviesListContent from "./layouts/Contents/MoviesList";
import PeopleListContent from "./layouts/Contents/PeopleList";

export const App = () => {
  const movieStatus = useSelector(selectMoviesStatus);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const peopleStatus = useSelector(selectPeopleStatus);
  const personDetailsStatus = useSelector(selectPeopleDetailsStatus);
  const movieID = useSelector(selectMovieID);
  const personID = useSelector(selectPeopleID);
  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  const searchTextPeople = useSelector(selectPeopleSearchText);
  const searchTextMovies = useSelector(selectSearchMoviesText);
  const searchPeopleStatus = useSelector(selectSearchPeopleStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
    dispatch(fetchMovies());
    dispatch(fetchMovieDetailsAndCredits());
    dispatch(fetchPeople());
    dispatch(fetchPeopleDetails());

    if (searchMoviesStatus === "initial" && searchTextMovies != "") {
      dispatch(fetchSearchMovies());
    }
    if (searchPeopleStatus === "initial" && searchTextPeople != "") {
      dispatch(fetchSearchPeople());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <HeadContainer>
          <NavLink to="/popular-movies">
            <StyledLogo
              onClick={() => {
                dispatch(fetchMovies());
                dispatch(moviesPageFirst());
                dispatch(changeMoviesSearchText(""));
              }}
            />
          </NavLink>
          <ButtonsBox>
            <StyledNavLink to="/popular-movies">
              <MoviesButton
                onClick={() => {
                  dispatch(fetchMovies());
                  dispatch(moviesPageFirst());
                  dispatch(changeMoviesSearchText(""));
                }}
              >
                Movies
              </MoviesButton>
            </StyledNavLink>
            <StyledNavLink to="/popular-people">
              <PeopleButton
                onClick={() => {
                  dispatch(fetchPeople());
                  dispatch(peoplePageFirst());
                  dispatch(changeMoviesSearchText(""));
                }}
              >
                People
              </PeopleButton>
            </StyledNavLink>
          </ButtonsBox>
          <Box>
            <StyledLoupe />
            <Input />
          </Box>
        </HeadContainer>
        <Switch>
          <Route exact path="/popular-movies">
            {movieStatus === "loading" ? <Loading /> : <MoviesListContent />}
          </Route>
          <Route exact path="/popular-people">
            {peopleStatus === "loading" ? <Loading /> : <PeopleListContent />}
          </Route>
          <Route path={`/popular-movies/${movieID}`}>
            {movieDetailsStatus === "loading" ? <Loading /> : <MoviesDetails />}
          </Route>
          <Route path={`/popular-people/${personID}`}>
            {personDetailsStatus === "loading" ? <Loading /> : <PersonDetails />}
          </Route>
          <Route exact path="/">
            <Redirect to={"/popular-movies"} />
          </Route>
          <Route path="*/search">
            {searchMoviesStatus === "loading" || searchPeopleStatus === "loading" ? (
              <Loading />
            ) : (
              <Search />
            )}
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
