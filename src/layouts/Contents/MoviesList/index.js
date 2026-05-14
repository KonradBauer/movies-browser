import { useSelector } from "react-redux";

import Error from "../../Error";
import Pagination from "../../Pagination";
import Tile from "../../Tile";
import MovieTileSkeleton from "../../Skeleton/MovieTileSkeleton";
import { selectMovies, selectMoviesPages, selectMoviesStatus } from "../../../features/movies/movie/moviesSlice";
import { selectPosterSizes } from "../../../features/configurationSlice";

import { BoxTitle, MainBox, Section, TilesList } from "../styled";

const SKELETON_COUNT = 20;

const MoviesListContent = () => {
  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);
  const moviesStatus = useSelector(selectMoviesStatus);
  const moviesPage = useSelector(selectMoviesPages);

  return (
    <>
      {moviesStatus === "error" && <Error />}
      {moviesStatus === "loading" && (
        <MainBox>
          <Section>
            <BoxTitle>Popular movies</BoxTitle>
            <TilesList>
              {Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <MovieTileSkeleton key={i} />
              ))}
            </TilesList>
          </Section>
        </MainBox>
      )}
      {moviesStatus === "success" && (
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
