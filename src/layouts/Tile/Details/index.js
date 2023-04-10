import MovieDetails from "./MovieDetails";
import PersonDetails from "./PersonDetails";

import { DetailsContainer } from "./styled";

const Details = ({ movieDetails, personDetails, production_countries, release_date, birthday, place_of_birth }) => {
  return (
    <DetailsContainer personDetails={personDetails}>
      {movieDetails && <MovieDetails production_countries={production_countries} release_date={release_date} />}
      {personDetails && <PersonDetails birthday={birthday} place_of_birth={place_of_birth} />}
    </DetailsContainer>
  );
};

export default Details;
