import { DescriptionContainer, Image, Container } from "./styled";
import { useDispatch } from "react-redux";
import { Information } from "../../Information";
import { APIImageUrl } from "../../../../features/getAPI";
import { getMovieID } from "../../../../features/movies/movie/moviesSlice";
import { Tags } from "../../Tags";
import { Raiting } from "../../Raiting";
import { fetchMovieDetailsAndCredits } from "../../../../features/movies/movieDetails/movieDetailsAndCreditsSlice";

export const MovieTile = ({
  movie,
  id,
  posterSizes,
  title,
  release_date,
  poster_path,
  genre_ids,
  vote_average,
  vote_count,
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div
        onClick={() => {
          dispatch(getMovieID(id));
          dispatch(fetchMovieDetailsAndCredits());
        }}
      >
        <Image source={`${APIImageUrl}/${posterSizes[3]}${poster_path}`} alt="" />
        <DescriptionContainer>
          <Information movie title={title} release_date={release_date} />
          <Tags movie={movie} genre_ids={genre_ids} />
        </DescriptionContainer>
        <Raiting vote_average={vote_average} vote_count={vote_count} />
      </div>
    </Container>
  );
};