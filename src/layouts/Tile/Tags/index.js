import MovieDetailsTags from "./MovieDetailsTags";
import MovieTags from "./MovieTags";

import { TagsContainer } from "./styled";

const Tags = ({ movie, movieDetails, genre_ids, genresDetails }) => {
  return (
    <TagsContainer movieDetails={movieDetails}>
      {movie && <MovieTags genre_ids={genre_ids} />}
      {movieDetails && <MovieDetailsTags genresDetails={genresDetails} />}
    </TagsContainer>
  );
};

export default Tags;
