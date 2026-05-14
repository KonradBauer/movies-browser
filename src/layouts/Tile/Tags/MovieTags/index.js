import { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectGenres } from "../../../../features/movies/genresSilce";

import { Tag, TagContent } from "../styled";

const MovieTags = ({ genre_ids }) => {
  const genres = useSelector(selectGenres);

  const genreMap = useMemo(
    () => Object.fromEntries(genres.map((g) => [g.id, g.name])),
    [genres]
  );

  return (
    <>
      {genre_ids?.map((genreID) => {
        const name = genreMap[genreID];
        return name ? (
          <Tag key={genreID}>
            <TagContent>{name}</TagContent>
          </Tag>
        ) : null;
      })}
    </>
  );
};

export default MovieTags;
