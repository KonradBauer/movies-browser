import { useSelector } from "react-redux";
import { selectGenres } from "../../../features/movies/genresSilce";
import { TagsContainer, Tag, TagContent } from "./styled";

export const Tags = ({ movie, movieDetails, genre_ids, genresDetails }) => {
  const genres = useSelector(selectGenres);

  return (
    <TagsContainer movieDetails={movieDetails}>
      {movie ? (
        <>
          {genre_ids.map((genreID) => {
            const genre = genres.find(({ id }) => id === genreID);
            return (
              <Tag key={genreID.key}>
                <TagContent movieDetails={movieDetails}>{genre.name}</TagContent>
              </Tag>
            );
          })}
        </>
      ) : (
        ""
      )}
      {movieDetails ? (
        <>
          {genresDetails
            ? genresDetails.map(({ key, name }) => {
                return (
                  <Tag key={key}>
                    <TagContent movieDetails={movieDetails}>{name}</TagContent>
                  </Tag>
                );
              })
            : ""}
        </>
      ) : (
        ""
      )}
    </TagsContainer>
  );
};
