import { DescriptionContainer, Image, Container } from "./styled";
import { useDispatch } from "react-redux";
import { Information } from "../../Information";
import { APIImageUrl } from "../../../../features/getAPI";
import { getMovieID } from "../../../../features/movies/movie/moviesSlice";
import { Tags } from "../../Tags";
import { Raiting } from "../../Raiting";
import { fetchMovieDetails } from "../../../../features/movies/movieDetails/movieDetailsSlice";

export const MovieTile = ({
  key,
  id,
  title,
  release_date,
  poster_path,
  genre_ids,
  vote_average,
  vote_count,
}) => {
  const dispatch = useDispatch();

  return (
    <Container key={key}>
      <div
        onClick={() => {
          dispatch(getMovieID(id));
          setTimeout(() => dispatch(fetchMovieDetails()), 4 * 1000);
        }}
      >
        <Image source={`${APIImageUrl}/w500${poster_path}`} alt="" />
          <DescriptionContainer>
            <Information movie title={title} release_date={release_date} />
            <Tags />
          </DescriptionContainer>
          <Raiting vote_average={vote_average} vote_count={vote_count} />
      </div>
    </Container>
  );
};
