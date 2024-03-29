import { useDispatch } from "react-redux";

import Information from "../../Information";
import { Raiting } from "../../Raiting";
import Tags from "../../Tags";
import { APIImageUrl } from "../../../../features/getAPI";
import { fetchMovieDetailsAndCredits } from "../../../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { getMovieID } from "../../../../features/movies/movie/moviesSlice";

import noPoster from "../../../../common/images/no-poster.png";
import { ContainerLink, DescriptionContainer, Image } from "./styled";

const MovieTile = ({
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

  const dispatchMvoieDetailsHandler = () => {
    dispatch(getMovieID(id));
    dispatch(fetchMovieDetailsAndCredits());
  };

  return (
    <ContainerLink to={`/popular-movies/${id}`} onClick={dispatchMvoieDetailsHandler}>
      <Image
        source={poster_path ? `${APIImageUrl}/${posterSizes ? posterSizes[3] : ""}${poster_path}` : noPoster}
        alt=""
      />
      <div>
        <DescriptionContainer>
          <Information movie title={title} release_date={release_date} />
          <Tags movie={movie} genre_ids={genre_ids} />
        </DescriptionContainer>
        <Raiting vote_average={vote_average} vote_count={vote_count} />
      </div>
    </ContainerLink>
  );
};

export default MovieTile;
