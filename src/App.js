import React from "react";
import MoviesBrowser from "./MoviesBrowser";
import { HashRouter, Route, Redirect, Switch, NavLink } from "react-router-dom";
import { HeadContainer, MoviesButton, PeopleButton } from "./layouts/Header/styled";
import { Content, PeopleContent } from "./layouts/Contents/index";
import { PersonDetails } from "./layouts/PersonDetails/index";
import { MoviesDetails } from "./layouts/MoviesDetails/index";
import { Loading } from "./layouts/Loading/index";
import { ThemeProvider } from "styled-components";
import { Search } from "./layouts/Search/index";
import { theme } from "./common/Theme/theme";
import { StyledNavLink } from "./StyledApp";
import { StyledLogo, Box, StyledLoupe, ButtonsBox } from "./layouts/Header/styled";
import { useState, useEffect } from "react";
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
import { selectMovieDetailsStatus } from "./features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPeopleDetailsStatus } from "./features/peoples/peopleDetails/peopleDetailsSlice";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { fetchPeople } from "./features/peoples/people/peopleSlice";
import { fetchGenres } from "./features/movies/genresSilce";
import { fetchConfiguration } from "./features/configurationSlice";
import { fetchSearchMovies, selectSearchMoviesStatus } from "./features/movies/searchMoviesSlice";
import { changeSearchText } from "./features/movies/searchMoviesSlice";
import { selectSearchText } from "./features/movies/searchMoviesSlice";
import { fetchSearchPeople } from "./features/peoples/searchPeopleSlice";
import Input from "./features/Input";
import searchQueryParamsName from "./features/searchQueryParamName";
import { useQueryParameter } from "./features/queryParameters";

export const App = () => {
  const movieStatus = useSelector(selectMoviesStatus);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const peopleStatus = useSelector(selectPeopleStatus);
  const personDetailsStatus = useSelector(selectPeopleDetailsStatus);
  const movieID = useSelector(selectMovieID);
  const personID = useSelector(selectPeopleID);
  const searchTextMovies = useSelector(selectSearchText);
  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
    dispatch(fetchMovies());
    dispatch(fetchPeople());
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
              }}
            />
          </NavLink>
          <ButtonsBox>
            <StyledNavLink to="/popular-movies">
              <MoviesButton
                onClick={() => {
                  dispatch(fetchMovies());
                  dispatch(moviesPageFirst());
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
                }}
              >
                People
              </PeopleButton>
            </StyledNavLink>
          </ButtonsBox>
          <Box>
            <StyledLoupe />
            <Input to={{ pathname: "/movies-search", search: `?search=${searchTextMovies}` }} />
          </Box>
        </HeadContainer>
        <Switch>
          <Route exact path="/popular-movies">
            {movieStatus === "loading" ? <Loading /> : <Content />}
          </Route>
          <Route exact path="/popular-people">
            {peopleStatus === "loading" ? <Loading /> : <PeopleContent />}
          </Route>
          <Route path={`/popular-movies/${movieID}`}>
            {movieDetailsStatus === "loading" ? <Loading /> : <MoviesDetails />}
          </Route>
          <Route path={`/popular-people/${personID}`}>
            {personDetailsStatus === "loading" ? <Loading /> : <PersonDetails />}
          </Route>
          <Route path={{ pathname: "/movies-search", search: `?search=${searchTextMovies}` }}>
            {searchMoviesStatus === "loading" ? <Loading /> : <Search />}
          </Route>
          <Route exact path="/">
            <Redirect to={"/popular-movies"} />
          </Route>
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
