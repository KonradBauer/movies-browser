import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PeopleContent, Content } from "./layouts/Contents";
import { MoviesButton, PeopleButton } from "./layouts/Header/styled";
import { StyledNavLink } from "./StyledApp";
import MoviesBrowser from "./MovieBrowser";

export const App = () => (
  <HashRouter basename="movies-browser">
    <nav>
      <li>
        <StyledNavLink to="/popular-movies">Movies</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/popular-people">People</StyledNavLink>
      </li>
    </nav>

    <Switch>
      <Route path="/popular-movies">
        <MoviesBrowser />
      </Route>
      <Route path="/popular-people">
        <PeopleContent />
      </Route>
      <Route path="/">
        <Redirect to="/popular-movies" />
      </Route>
    </Switch>
  </HashRouter>
);
