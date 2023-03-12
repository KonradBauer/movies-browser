import { Container, Description, Content, Poster } from "./styled";
import { TagsComponent } from "./Tags";
import { Information } from "./Information";
import { RaitingComponent } from "./Raiting";
import { DescriptionComponent } from "./Description";
import { Details } from "./Details";
import noPoster from "../../common/images/no-poster.png";
import noperson from "../../common/images/no-person.png";

export const Tile = ({ movie, movieDetails, person, role, personDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails} person={person} personDetails={personDetails}>
      {movie ? (
        <>
          <Poster src={srcImage ? srcImage : noPoster} alt="" />
          <Content>
            <Description>
              <Information movie={movie} />
              <TagsComponent />
            </Description>
            <RaitingComponent />
          </Content>
        </>
      ) : (
        ""
      )}
      {movieDetails ? (
        <>
          <Poster movieDetails={movieDetails} src={srcImage ? srcImage : noPoster} alt="" />
          <Content movieDetails={movieDetails}>
            <Description movieDetails={movieDetails}>
              <Information movieDetails={movieDetails} />
              <Details movieDetails={movieDetails} />
              <TagsComponent movieDetails={movieDetails} />
            </Description>
            <RaitingComponent movieDetails={movieDetails} />
          </Content>
          <DescriptionComponent movieDetails={movieDetails} />
        </>
      ) : (
        ""
      )}
      {person ? (
        <>
          <Poster person={person} src={srcImage ? srcImage : noperson} alt="" />
          <Information person={person} role={role} />
        </>
      ) : (
        ""
      )}
      {personDetails ? (
        <>
          <Poster personDetails={personDetails} src={srcImage ? srcImage : noPoster} alt="" />
          <Description personDetails={personDetails}>
            <Information personDetails={personDetails} />
            <Details personDetails={personDetails} />
          </Description>
          <DescriptionComponent personDetails={personDetails} />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
