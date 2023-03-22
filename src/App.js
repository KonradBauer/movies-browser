import React from "react";
import { HashRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { MoviesButton, PeopleButton } from "./layouts/Header/styled";
import MoviesBrowser from "./MoviesBrowser";
import { PeopleContent } from "./layouts/Contents/index";

export const App = () => {
  return (
    <HashRouter>
      <nav>
        <Link to="/popular-movies">Movies</Link>
        <Link to="/popular-people">People</Link>

        <Switch>
          <Route path="/popular-movies">
            <MoviesBrowser />
          </Route>
          <Route path="/popular-people">
            <PeopleContent />
          </Route>
          <Route exact path="/">
            <Redirect to="/popular-movies" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  );
};

export default App;
