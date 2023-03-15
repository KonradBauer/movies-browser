import { Container, DescriptionContainer, MovieContainer, Image } from "./styled";
import { Tags } from "./Tags";
import { Information } from "./Information";
import { Raiting } from "./Raiting";
import { Description } from "./Description";
import { Details } from "./Details";
import noPoster from "../../common/images/no-poster.png";
import noPerson from "../../common/images/no-person.png";

export const Tile = ({ movie, movieDetails, person, role, personDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails} person={person} personDetails={personDetails}>
      {movie ? (
        <>
          <Image src={srcImage ? srcImage : noPoster} alt="" />
          <MovieContainer>
            <DescriptionContainer>
              <Information movie={movie} />
              <Tags />
            </DescriptionContainer>
            <Raiting />
          </MovieContainer>
        </>
      ) : (
        ""
      )}
      {movieDetails ? (
        <>
          <Image movieDetails={movieDetails} src={srcImage ? srcImage : noPoster} alt="" />
          <MovieContainer movieDetails={movieDetails}>
            <DescriptionContainer movieDetails={movieDetails}>
              <Information movieDetails={movieDetails} />
              <Details movieDetails={movieDetails} />
              <Tags movieDetails={movieDetails} />
            </DescriptionContainer>
            <Raiting movieDetails={movieDetails} />
          </MovieContainer>
          <Description movieDetails={movieDetails} />
        </>
      ) : (
        ""
      )}
      {person ? (
        <>
          <Image person={person} src={srcImage ? srcImage : noPerson} alt="" />
          <Information person={person} role={role} />
        </>
      ) : (
        ""
      )}
      {personDetails ? (
        <>
          <Image personDetails={personDetails} src={srcImage ? srcImage : noPerson} alt="" />
          <DescriptionContainer personDetails={personDetails}>
            <Information personDetails={personDetails} />
            <Details personDetails={personDetails} />
          </DescriptionContainer>
          <Description personDetails={personDetails} />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
