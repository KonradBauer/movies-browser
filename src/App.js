import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { HeadContainer, MoviesButton, PeopleButton } from "./layouts/Header/styled";
import MoviesBrowser from "./MoviesBrowser";
import { PeopleContent } from "./layouts/Contents/index";
import { PersonDetails } from "./layouts/PersonDetails/index";
import { MoviesDetails } from "./layouts/MoviesDetails/index";
import { Loading } from "./layouts/Loading/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/Theme/theme";
import { StyledNavLink } from "./StyledApp";
import { StyledLogo, Box, StyledLoupe, Input, ButtonsBox } from "./layouts/Header/styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMovieID } from "./features/movies/movie/moviesSlice";
import { selectPeopleID } from "./features/peoples/people/peopleSlice";
import { selectMovieDetailsStatus } from "./features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPeopleDetailsStatus } from "./features/peoples/peopleDetails/peopleDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/movie/moviesSlice";
import { fetchPeople } from "./features/peoples/people/peopleSlice";
import { fetchGenres } from "./features/movies/genresSilce";
import { fetchConfiguration } from "./features/configurationSlice";

export const App = () => {
  const [placeholderTextMovies, setPlaceholderTextMovies] = useState(true);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const personDetailsStatus = useSelector(selectPeopleDetailsStatus);
  const movieID = useSelector(selectMovieID);
  const personID = useSelector(selectPeopleID);

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
          <StyledLogo />
          <ButtonsBox>
            <StyledNavLink to="/popular-movies">
              <MoviesButton onClick={() => setPlaceholderTextMovies(true)}>Movies</MoviesButton>
            </StyledNavLink>
            <StyledNavLink to="/popular-people">
              <PeopleButton onClick={() => setPlaceholderTextMovies(false)}>People</PeopleButton>
            </StyledNavLink>
          </ButtonsBox>
          <Box>
            <StyledLoupe />
            <Input placeholder={`Search for ${placeholderTextMovies ? "movies" : "people"}...`} />
          </Box>
        </HeadContainer>
        <Switch>
          <Route path="/popular-movies">
            <MoviesBrowser />
          </Route>
          <Route path="/popular-people">
            <PeopleContent />
          </Route>
          <Route path={`/movieDetails/${movieID}`}>
            {movieDetailsStatus === "loading" ? <Loading /> : <MoviesDetails />}
          </Route>
          <Route path={`/personDetails/${personID}`}>
            {personDetailsStatus === "loading" ? <Loading /> : <PersonDetails />}
          </Route>
          <Route exact path="/">
            <Redirect to={"/popular-movies"} />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
