import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import MoviesBrowser from "./MoviesBrowser";

export const App = () => {
  return (
    <HashRouter>
      <Route path="/">
        <Redirect to="/popular-movies" />
      </Route>
      <Route path="/popular-movies">
        <MoviesBrowser />
      </Route>
    </HashRouter>
  );
};

export default App;
