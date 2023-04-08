import { useSelector } from "react-redux";

import Error from "../../Error";
import Pagination from "../../Pagination";
import { selectMovies, selectMoviesPages, selectMoviesStatus } from "../../../features/movies/movie/moviesSlice";
import { selectPosterSizes } from "../../../features/configurationSlice";
import { Tile } from "../../Tile";

import { BoxTitle, MainBox, Section, TilesList } from "../styled";

const MoviesListContent = () => {
   const movies = useSelector(selectMovies);
   const posterSizes = useSelector(selectPosterSizes);
   const moviesStatus = useSelector(selectMoviesStatus);
   const moviesPage = useSelector(selectMoviesPages);

   return (
      <>
         {moviesStatus === "error" ? (
            <Error />
         ) : (
            <MainBox>
               <Section>
                  <BoxTitle>Popular movies</BoxTitle>
                  <TilesList>
                     {movies.map(({ id, title, release_date, poster_path, genre_ids, vote_average, vote_count }) => (
                        <Tile
                           movie
                           key={id}
                           posterSizes={posterSizes}
                           id={id}
                           title={title}
                           release_date={release_date}
                           poster_path={poster_path}
                           genre_ids={genre_ids}
                           vote_average={vote_average}
                           vote_count={vote_count}
                        />
                     ))}
                  </TilesList>
               </Section>
               <Pagination page={moviesPage} totalPages={500} />
            </MainBox>
         )}
      </>
   );
};

export default MoviesListContent;
