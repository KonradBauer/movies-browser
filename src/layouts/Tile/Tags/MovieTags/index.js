import { useSelector } from "react-redux";

import { selectGenres } from "../../../../features/movies/genresSilce";

import { Tag, TagContent } from "../styled";

const MovieTags = ({ genre_ids }) => {
  const genres = useSelector(selectGenres);

  return (
    <>
      {genre_ids &&
        genre_ids.map((genreID) => {
          const genre = genres.find(({ id }) => id === genreID);
          return (
            <Tag key={genreID}>
              <TagContent>{genre && genre.name}</TagContent>
            </Tag>
          );
        })}
    </>
  );
};

export default MovieTags;
