import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import NoResult from "../NoResult";
import Pagination from "../Pagination";
import Tile from "../Tile/index";
import {
   selectSearchMoviesText,
   selectMoviesTotalResults,
   selectSearchMovies,
   selectMoviesTotalPages,
   selectSearchMoviesPage,
} from "../../features/movies/searchMoviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import {
   selectPeopleTotalPages,
   selectPeopleTotalResults,
   selectSearchPeople,
   selectSearchPeoplePage,
   selectPeopleSearchText,
} from "../../features/peoples/searchPeopleSlice";

import { SearchResults, MoviesTilesList, Wrapper, PeopleTilesList } from "./styled";

export const Search = () => {
   const history = useHistory();

   const searchMovie = useSelector(selectSearchMovies);
   const searchMoviesPage = useSelector(selectSearchMoviesPage);
   const moviesTotalPages = useSelector(selectMoviesTotalPages);
   const moviesTotalResults = useSelector(selectMoviesTotalResults);
   const moviesQuery = useSelector(selectSearchMoviesText);
   const posterSizes = useSelector(selectPosterSizes);

   const searchPeople = useSelector(selectSearchPeople);
   const searchPeoplePage = useSelector(selectSearchPeoplePage);
   const peopleTotalResults = useSelector(selectPeopleTotalResults);
   const peopleTotalPages = useSelector(selectPeopleTotalPages);
   const peopleQuery = useSelector(selectPeopleSearchText);
   const profileSizes = useSelector(selectProfileSizes);

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
               {searchMovie && searchMovie.length > 0 && (
                  <MoviesTilesList>
                     {searchMovie.map(({ id, title, release_date, poster_path, genre_ids, vote_average, vote_count }) => (
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
                     ))}
                  </MoviesTilesList>
               )}
               {searchPeople && searchPeople.length > 0 && (
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
                  </PeopleTilesList>
               )}
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
