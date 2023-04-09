import { Tag, TagContent } from "../styled";

const MovieDetailsTags = ({ genresDetails }) => {
  return (
    <>
      {genresDetails &&
        genresDetails.map(({ id, name }) => {
          return (
            <Tag key={id}>
              <TagContent movieDetails>{name}</TagContent>
            </Tag>
          );
        })}
    </>
  );
};

export default MovieDetailsTags;
