import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movie/moviesSlice";
import { selectPeople } from "../../features/peoples/people/peopleSlice";
import { MovieTile } from "./movies/movie";
import { MovieDetailsTile } from "./movies/movieDetails";
import { PersonTile } from "./persons/person";
import { PersonDetailsTile } from "./persons/personDetails";
import { selectMovieDetails } from "../../features/movies/movieDetails/movieDetailsSlice";

export const Tile = ({ movie, movieDetails, person, role, personDetails }) => {
  const movies = useSelector(selectMovies);
  const moviesDetails = useSelector(selectMovieDetails);
  const people = useSelector(selectPeople);

  return (
    <>
      {movie ? (
        <>
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
              <MovieTile
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
        </>
      ) : (
        ""
      )}
      {movieDetails ? (
        <MovieDetailsTile
          movieDetails
          poster_path={moviesDetails.poster_path}
          title={moviesDetails.title}
          production_countries={moviesDetails.production_countries}
          release_date={moviesDetails.release_date}
          genresDetails={moviesDetails.genres}
          vote_average={moviesDetails.vote_average}
          vote_count={moviesDetails.vote_count}
          overview={moviesDetails.overview}
        />
      ) : (
        ""
      )}
      {person ? (
        <>
          {people.map(({ key, name, profile_path }) => (
            <PersonTile person key={key} name={name} profile_path={profile_path} />
          ))}
        </>
      ) : (
        ""
      )}
      {personDetails ? <PersonDetailsTile personDetails /> : ""}
    </>
  );
};
