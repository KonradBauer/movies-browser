import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "./movies/movie";
import { MovieDetailsTile } from "./movies/movieDetails";
import { PersonTile } from "./persons/person";
import { PersonDetailsTile } from "./persons/personDetails";
import {
  fetchMovieDetailsAndCredits,
  selectMovieDetails,
} from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import {
  fetchPeopleDetails,
  selectPeopleDetails,
} from "../../features/peoples/peopleDetails/peopleDetailsSlice";
import { Link } from "react-router-dom";
import { getMovieID } from "../../features/movies/movie/moviesSlice";
import { getPeopleID } from "../../features/peoples/people/peopleSlice";

export const Tile = ({
  movie,
  movieDetails,
  person,
  personDetails,
  key,
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

  const dispatch = useDispatch();

  const dispatchMvoieDetailsHandler = () => {
    dispatch(getMovieID(id));
    dispatch(fetchMovieDetailsAndCredits());
  };

  const dispatchPersonDetailsHandler = () => {
    dispatch(getPeopleID(id));
    dispatch(fetchPeopleDetails());
  };

  return (
    <>
      {movie ? (
        <>
          <Link to={`/movieDetails/${id}`} onClick={dispatchMvoieDetailsHandler}>
            <MovieTile
              movie
              key={key}
              id={id}
              posterSizes={posterSizes}
              title={title}
              release_date={release_date}
              poster_path={poster_path}
              genre_ids={genre_ids}
              vote_average={vote_average}
              vote_count={vote_count}
            />
          </Link>
        </>
      ) : (
        ""
      )}
      {movieDetails ? (
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
      ) : (
        ""
      )}
      {person ? (
        <Link to={`/personDetails/${id}`} onClick={dispatchPersonDetailsHandler}>
          <PersonTile
            person
            key={key}
            id={id}
            profileSizes={profileSizes}
            name={name}
            character={character}
            job={job}
            profile_path={profile_path}
          />
        </Link>
      ) : (
        ""
      )}
      {personDetails ? (
        <PersonDetailsTile
          personDetails
          profileSizes={profileSizes}
          profile_path={peopleDetails.profile_path}
          name={peopleDetails.name}
          birthday={peopleDetails.birthday}
          place_of_birth={peopleDetails.place_of_birth}
          biography={peopleDetails.biography}
        />
      ) : (
        ""
      )}
    </>
  );
};
