import { useSelector } from "react-redux";
import { SearchResults, TilesList, Wrapper } from "./styled";
import {
  selectSearchText,
  selectTotalResults,
  selectSearchMovies,
  selectTotalPages,
  selectSearchMoviesPage,
} from "../../features/movies/searchMoviesSlice";
import { selectPosterSizes } from "../../features/configurationSlice";
import { Tile } from "../Tile/index";
import { NoResult } from "../NoResult";
import { Pagination } from "../Pagination";
import { useHistory } from "react-router-dom";
import { selectSearchPeoplePage } from "../../features/peoples/searchPeopleSlice";

export const Search = () => {
  const searchMovie = useSelector(selectSearchMovies);
  const searchMoviesPage = useSelector(selectSearchMoviesPage);
  const searchPeoplePage = useSelector(selectSearchPeoplePage);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);
  const query = useSelector(selectSearchText);
  const posterSizes = useSelector(selectPosterSizes);
  const history = useHistory();

  return (
    <>
      {query === "" && history.push("/popular-movies")}
      {totalResults !== 0 ? (
        <Wrapper>
          <SearchResults>
            Search results for “{query && query}” ({totalResults})
          </SearchResults>
          <TilesList>
            {searchMovie &&
              searchMovie.length > 0 &&
              searchMovie.map(
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
          </TilesList>
          <Pagination page={searchMoviesPage} totalPages={totalPages} />
        </Wrapper>
      ) : (
        <NoResult />
      )}
    </>
  );
};
