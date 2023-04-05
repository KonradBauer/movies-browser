import { useSelector } from "react-redux";
import { SearchResults, MoviesTilesList, Wrapper, PeopleTilesList } from "./styled";
import {
  selectSearchMoviesText,
  selectMoviesTotalResults,
  selectSearchMovies,
  selectMoviesTotalPages,
  selectSearchMoviesPage,
} from "../../features/movies/searchMoviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import { Tile } from "../Tile/index";
import { NoResult } from "../NoResult";
import { Pagination } from "../Pagination";
import { useHistory } from "react-router-dom";
import { selectSearchPeople, selectSearchPeoplePage, selectPeopleTotalResults, selectPeopleTotalPages, selectPeopleSearchText } from "../../features/peoples/searchPeopleSlice";

export const Search = () => {
  const searchMovie = useSelector(selectSearchMovies);
  const searchPeople = useSelector(selectSearchPeople);
  const searchMoviesPage = useSelector(selectSearchMoviesPage);
  const searchPeoplePage = useSelector(selectSearchPeoplePage);
  const moviesTotalResults = useSelector(selectMoviesTotalResults);
  const peopleTotalResults = useSelector(selectPeopleTotalResults);
  const moviesTotalPages = useSelector(selectMoviesTotalPages);
  const peopleTotalPages = useSelector(selectPeopleTotalPages);
  const moviesQuery = useSelector(selectSearchMoviesText);
  const peopleQuery = useSelector(selectPeopleSearchText);
  const posterSizes = useSelector(selectPosterSizes);
  const profileSizes = useSelector(selectProfileSizes);
  const history = useHistory();

  return (
    <>
      {peopleTotalResults === 0 && peopleQuery === "" ? history.push("/popular-people")
        : moviesTotalResults === 0 && moviesQuery === "" ? history.push("/popular-movies") : ""}
      {moviesTotalResults !== 0 && peopleTotalResults !== 0 ? (
        <Wrapper>
          <SearchResults>
            Search results for “{moviesQuery != "" ? moviesQuery : peopleQuery}”
            ({moviesTotalResults ? moviesTotalResults : peopleTotalResults})
          </SearchResults>
          {searchMovie &&
            searchMovie.length > 0 &&
            <MoviesTilesList>
              {searchMovie.map(
                ({ id, title, release_date, poster_path, genre_ids, vote_average, vote_count }) => (
                  <Tile
                    movie
                    id={id}
                    posterSizes={posterSizes}
                    title={title}
                    release_date={release_date}
                    poster_path={poster_path}
                    genre_ids={genre_ids}
                    vote_average={vote_average}
                    vote_count={vote_count}
                  />
                )
              )}
            </MoviesTilesList>}
          {searchPeople && searchPeople.length > 0 &&
            <PeopleTilesList>
              {searchPeople.map(({ id, name, profile_path }) => (
                <Tile
                  person
                  profileSizes={profileSizes}
                  key={id}
                  id={id}
                  name={name}
                  profile_path={profile_path}
                />
              ))}
            </PeopleTilesList>}
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
