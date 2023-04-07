import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { PersonDetails } from "./layouts/PersonDetails/index";
import MoviesDetails from "./layouts/MoviesDetails/index";
import { Loading } from "./layouts/Loading/index";
import { ThemeProvider } from "styled-components";
import { Search } from "./layouts/Search/index";
import { theme } from "./common/Theme/theme";
import { useSelector } from "react-redux";
import { selectMovieID, selectMoviesStatus } from "./features/movies/movie/moviesSlice";
import { selectPeopleID, selectPeopleStatus } from "./features/peoples/people/peopleSlice";
import { selectMovieDetailsStatus } from "./features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPeopleDetailsStatus } from "./features/peoples/peopleDetails/peopleDetailsSlice";
import { selectSearchMoviesStatus } from "./features/movies/searchMoviesSlice";
import { selectSearchPeopleStatus } from "./features/peoples/searchPeopleSlice";
import Error from "./layouts/Error";
import MoviesListContent from "./layouts/Contents/MoviesList";
import PeopleListContent from "./layouts/Contents/PeopleList";
import Header from "./layouts/Header";

export const App = () => {
   const movieStatus = useSelector(selectMoviesStatus);
   const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
   const peopleStatus = useSelector(selectPeopleStatus);
   const personDetailsStatus = useSelector(selectPeopleDetailsStatus);
   const movieID = useSelector(selectMovieID);
   const personID = useSelector(selectPeopleID);
   const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
   const searchPeopleStatus = useSelector(selectSearchPeopleStatus);

   return (
      <ThemeProvider theme={theme}>
         <HashRouter>
            <Header />
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
                  {searchMoviesStatus === "loading" || searchPeopleStatus === "loading" ? <Loading /> : <Search />}
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
