import { Description } from "../../Description";
import { Details } from "../../Details";
import { Information } from "../../Information";
import { Raiting } from "../../Raiting";
import { Tags } from "../../Tags";
import { Container, DescriptionContainer, Image, MovieContainer } from "./styled";
import noPoster from "../../../../common/images/no-poster.png";

export const MovieDetailsTile = ({
  srcImage,
  title,
  release_date,
  vote_average,
  vote_count,
  overwiev,
}) => {
  return (
    <Container movieDetails>
      <Image movieDetails src={srcImage ? srcImage : noPoster} alt="" />
      <MovieContainer movieDetails>
        <DescriptionContainer movieDetails>
          <Information movieDetails title={title} release_date={release_date} />
          <Details movieDetails release_date={release_date} />
          <Tags movieDetails />
        </DescriptionContainer>
        <Raiting movieDetails vote_average={vote_average} vote_count={vote_count} />
      </MovieContainer>
      <Description movieDetails overwiev={overwiev} />
    </Container>
  );
};
