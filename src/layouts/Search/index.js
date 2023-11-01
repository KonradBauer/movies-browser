import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Error from "../Error";
import Loading from "../Loading";
import MoviesList from "./MoviesList";
import NoResult from "../NoResult";
import PeopleList from "./PeopleList";
import Pagination from "../Pagination";
import {
  selectSearchMoviesText,
  selectMoviesTotalResults,
  selectSearchMovies,
  selectMoviesTotalPages,
  selectSearchMoviesPage,
  selectSearchMoviesStatus,
} from "../../features/movies/searchMoviesSlice";
import {
  selectPeopleTotalPages,
  selectPeopleTotalResults,
  selectSearchPeople,
  selectSearchPeoplePage,
  selectPeopleSearchText,
  selectSearchPeopleStatus,
} from "../../features/peoples/searchPeopleSlice";

import { SearchResults, Wrapper } from "./styled";

const Search = () => {
  const history = useHistory();

  const searchMovie = useSelector(selectSearchMovies);
  const searchMoviesPage = useSelector(selectSearchMoviesPage);
  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  const moviesTotalPages = useSelector(selectMoviesTotalPages);
  const moviesTotalResults = useSelector(selectMoviesTotalResults);
  const moviesQuery = useSelector(selectSearchMoviesText);

  const searchPeople = useSelector(selectSearchPeople);
  const searchPeoplePage = useSelector(selectSearchPeoplePage);
  const searchPeopleStatus = useSelector(selectSearchPeopleStatus);
  const peopleTotalResults = useSelector(selectPeopleTotalResults);
  const peopleTotalPages = useSelector(selectPeopleTotalPages);
  const peopleQuery = useSelector(selectPeopleSearchText);

  return (
    <>
      {moviesTotalResults === 0 && moviesQuery === "" && history.push("/popular-movies")}
      {peopleTotalResults === 0 && peopleQuery === "" && history.push("/popular-people")}
      {searchMoviesStatus === "error" || searchPeopleStatus === "error" ? <Error /> : null}
      {searchMoviesStatus === "loading" || searchPeopleStatus === "loading" ? <Loading /> : null}
      {searchMoviesStatus === "success" || searchPeopleStatus === "success" ? (
        moviesTotalResults !== 0 && peopleTotalResults !== 0 ? (
          <Wrapper>
            <SearchResults>
              Search results for “{moviesQuery !== "" ? moviesQuery : peopleQuery}” (
              {moviesTotalResults ? moviesTotalResults : peopleTotalResults})
            </SearchResults>
            {searchMovie && searchMovie.length > 0 && <MoviesList />}
            {searchPeople && searchPeople.length > 0 && <PeopleList />}
            <Pagination
              page={searchMoviesPage !== null ? searchMoviesPage : searchPeoplePage}
              totalPages={moviesTotalPages ? moviesTotalPages : peopleTotalPages}
            />
          </Wrapper>
        ) : (
          <NoResult />
        )
      ) : null}
    </>
  );
};

export default Search;
