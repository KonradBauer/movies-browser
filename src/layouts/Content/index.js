import { BoxTitle, MainBox, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes } from "../../features/configurationSlice";

export const Content = () => {
  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);

  return (
    <MainBox>
      <Tile movieDetails posterSizes={posterSizes} />
      <Section>
        <BoxTitle>Popular movies</BoxTitle>
        <TilesList>
          {movies.map(
            ({
              key,
              id,
              title,
              release_date,
              poster_path,
              genre_ids,
              vote_average,
              vote_count,
            }) => (
              <Tile
                movie
                key={key}
                posterSizes={posterSizes}
                id={id}
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
      </Section>
    </MainBox>
  );
};
