import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import NoResult from "../NoResult";
import MoviesList from "./MoviesList";
import PeopleList from "./PeopleList";
import Pagination from "../Pagination";
import {
  selectSearchMoviesText,
  selectMoviesTotalResults,
  selectSearchMovies,
  selectMoviesTotalPages,
  selectSearchMoviesPage,
} from "../../features/movies/searchMoviesSlice";
import {
  selectPeopleTotalPages,
  selectPeopleTotalResults,
  selectSearchPeople,
  selectSearchPeoplePage,
  selectPeopleSearchText,
} from "../../features/peoples/searchPeopleSlice";

import { SearchResults, Wrapper } from "./styled";

const Search = () => {
  const history = useHistory();

  const searchMovie = useSelector(selectSearchMovies);
  const searchMoviesPage = useSelector(selectSearchMoviesPage);
  const moviesTotalPages = useSelector(selectMoviesTotalPages);
  const moviesTotalResults = useSelector(selectMoviesTotalResults);
  const moviesQuery = useSelector(selectSearchMoviesText);

  const searchPeople = useSelector(selectSearchPeople);
  const searchPeoplePage = useSelector(selectSearchPeoplePage);
  const peopleTotalResults = useSelector(selectPeopleTotalResults);
  const peopleTotalPages = useSelector(selectPeopleTotalPages);
  const peopleQuery = useSelector(selectPeopleSearchText);

  return (
    <>
      {moviesTotalResults === 0 && moviesQuery === "" && history.push("/popular-movies")};
      {peopleTotalResults === 0 && peopleQuery === "" && history.push("/popular-people")};
      {moviesTotalResults !== 0 && peopleTotalResults !== 0 ? (
        <Wrapper>
          <SearchResults>
            Search results for “{moviesQuery != "" ? moviesQuery : peopleQuery}” (
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
      )}
    </>
  );
};

export default Search;
