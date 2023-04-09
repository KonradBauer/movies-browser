import { useSelector } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Error from "./layouts/Error";
import Header from "./layouts/Header";
import MoviesDetails from "./layouts/MoviesDetails/index";
import MoviesListContent from "./layouts/Contents/MoviesList";
import PersonDetails from "./layouts/PersonDetails/index";
import PeopleListContent from "./layouts/Contents/PeopleList";
import Search from "./layouts/Search/index";
import { selectMovieID } from "./features/movies/movie/moviesSlice";
import { selectPeopleID } from "./features/peoples/people/peopleSlice";
import { theme } from "./common/Theme/theme";


export const App = () => {
   const movieID = useSelector(selectMovieID);
   const personID = useSelector(selectPeopleID);

   return (
      <ThemeProvider theme={theme}>
         <HashRouter>
            <Header />
            <Switch>
               <Route exact path="/popular-movies">
                  <MoviesListContent />
               </Route>
               <Route exact path="/popular-people">
                  <PeopleListContent />
               </Route>
               <Route path={`/popular-movies/${movieID}`}>
                  <MoviesDetails />
               </Route>
               <Route path={`/popular-people/${personID}`}>
                  <PersonDetails />
               </Route>
               <Route exact path="/">
                  <Redirect to={"/popular-movies"} />
               </Route>
               <Route path="*/search">
                  <Search />
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
