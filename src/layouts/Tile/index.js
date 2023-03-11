import { Container, Description, Content, Poster } from "./styled";
import { TagsComponent } from "./Tags";
import { Information } from "./Information";
import { RaitingComponent } from "./Raiting";
import { DescriptionComponent } from "./Description";
import { ProductionAndRelease } from "./ProductionAndRelease";
import noPoster from "../../common/images/no-poster.png";

export const Tile = ({ movie, movieDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails}>
      {movie ? (
        <>
          <Poster src={srcImage ? srcImage : noPoster} alt="" />
          <Content>
            <Description>
              <Information />
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
              <Information />
              <ProductionAndRelease />
              <TagsComponent movieDetails={movieDetails} />
            </Description>
            <RaitingComponent movieDetails={movieDetails} />
          </Content>
          <DescriptionComponent />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
