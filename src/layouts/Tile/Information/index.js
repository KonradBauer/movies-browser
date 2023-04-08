import MovieInfo from "./MovieInfo";
import PersonInfo from "./PersonInfo";

import { InfoContainer } from "./styled";

const Information = ({ movie, movieDetails, person, personDetails, character, job, title, release_date, name }) => {
  return (
    <InfoContainer person={person} personDetails={personDetails}>
      {movie || movieDetails ? (
        <MovieInfo movieDetails={movieDetails} title={title} release_date={release_date} />
      ) : null}
      {person || personDetails ? (
        <PersonInfo person={person} personDetails={personDetails} name={name} character={character} job={job} />
      ) : null}
    </InfoContainer>
  );
};

export default Information;
