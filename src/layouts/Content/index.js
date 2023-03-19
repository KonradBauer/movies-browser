import { BoxTitle, MainBox, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movie/moviesSlice";

export const Content = () => {
  const movies = useSelector(selectMovies);

  return (
    <MainBox>
      <Tile movieDetails />
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
