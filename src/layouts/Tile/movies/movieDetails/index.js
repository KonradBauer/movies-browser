import { Description } from "../../Description";
import { Details } from "../../Details";
import { Information } from "../../Information";
import { Raiting } from "../../Raiting";
import { Tags } from "../../Tags";
import { Container, DescriptionContainer, Image, MovieContainer } from "./styled";
import { APIImageUrl } from "../../../../features/getAPI";

export const MovieDetailsTile = ({
  poster_path,
  title,
  production_countries,
  release_date,
  vote_average,
  vote_count,
  overview,
}) => {
  return (
    <Container movieDetails>
      <Image movieDetails source={`${APIImageUrl}/w500${poster_path}`} alt="" />
      <MovieContainer movieDetails>
        <DescriptionContainer movieDetails>
          <Information movieDetails title={title} release_date={release_date} />
          <Details
            movieDetails
            production_countries={production_countries}
            release_date={release_date}
          />
          <Tags movieDetails />
        </DescriptionContainer>
        <Raiting movieDetails vote_average={vote_average} vote_count={vote_count} />
      </MovieContainer>
      <Description movieDetails overview={overview} />
    </Container>
  );
};
