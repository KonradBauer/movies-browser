import { useSelector } from "react-redux";
import { useQueryParameter } from "../../features/queryParameters";
import { SearchResults, TilesList } from "./styled";
import { selectSearchText, selectTotalResults, selectSearchMovies } from "../../features/movies/searchMoviesSlice";
import { selectPosterSizes } from "../../features/configurationSlice";
import { Tile } from "../Tile/index";

export const Search = () => {
  const searchMovie = useSelector(selectSearchMovies);
  const totalResults = useSelector(selectTotalResults);
    const query = useSelector(selectSearchText);
  const posterSizes = useSelector(selectPosterSizes);


      return (
      <>
        <SearchResults>Search results for “{query && query}” ({totalResults})</SearchResults>
        <TilesList>
            {searchMovie && searchMovie.length > 0 && searchMovie.map(({
              id,
              title,
              release_date,
              poster_path,
              genre_ids,
              vote_average,
              vote_count,
            }) => 
              <Tile
                movie
                id={id}
                posterSizes={posterSizes}
                title={title}
                release_date={release_date}
                poster_path={poster_path}
                genre_ids={genre_ids}
                vote_average={vote_average}vote_count={vote_count}
            />)}
        </TilesList>
      </>
      )
}
