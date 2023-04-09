import { useSelector } from "react-redux";

import MovieDetailsTile from "./movies/movieDetails";
import MovieTile from "./movies/movie";
import { PersonDetailsTile } from "./persons/personDetails";
import { PersonTile } from "./persons/person";
import { selectMovieDetails } from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPeopleDetails } from "../../features/peoples/peopleDetails/peopleDetailsSlice";

const Tile = ({
  movie,
  movieDetails,
  person,
  personDetails,
  id,
  posterSizes,
  profileSizes,
  title,
  release_date,
  poster_path,
  profile_path,
  name,
  character,
  job,
  genre_ids,
  vote_average,
  vote_count,
}) => {
  const moviesDetails = useSelector(selectMovieDetails);
  const peopleDetails = useSelector(selectPeopleDetails);

  return (
    <>
      {movie && (
        <>
          <MovieTile
            movie
            id={id}
            posterSizes={posterSizes}
            title={title}
            release_date={release_date}
            poster_path={poster_path}
            genre_ids={genre_ids}
            vote_average={vote_average}
            vote_count={vote_count}
          />
        </>
      )}
      {movieDetails && moviesDetails && (
        <MovieDetailsTile
          movieDetails
          posterSizes={posterSizes}
          poster_path={moviesDetails.poster_path}
          title={moviesDetails.title}
          production_countries={moviesDetails.production_countries}
          release_date={moviesDetails.release_date}
          genresDetails={moviesDetails.genres}
          vote_average={moviesDetails.vote_average}
          vote_count={moviesDetails.vote_count}
          overview={moviesDetails.overview}
        />
      )}
      {person && (
        <PersonTile
          person
          id={id}
          profileSizes={profileSizes}
          name={name}
          character={character}
          job={job}
          profile_path={profile_path}
        />
      )}
      {personDetails && (
        <PersonDetailsTile
          personDetails
          profileSizes={profileSizes}
          profile_path={peopleDetails.profile_path}
          name={peopleDetails.name}
          birthday={peopleDetails.birthday}
          place_of_birth={peopleDetails.place_of_birth}
          biography={peopleDetails.biography}
        />
      )}
    </>
  );
};

export default Tile;
