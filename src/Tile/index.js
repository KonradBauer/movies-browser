import { Container, Description, Content, Poster } from "./styled";
import { TagsComponent } from "./Tags";
import { Information } from "./Information";
import { RaitingComponent } from "./Raiting";
import { DescriptionComponent } from "./Description";
import { ProductionAndRelease } from "./ProductionAndRelease";
import noPoster from "../common/images/no-poster.png";

export const Tile = ({ movieDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails}>
      <Poster movieDetails={movieDetails} src={srcImage ? srcImage : noPoster} alt="" />
      <Content movieDetails={movieDetails}>
        <Description movieDetails={movieDetails}>
          <Information />
          {movieDetails ? <ProductionAndRelease /> : null}
          <TagsComponent movieDetails={movieDetails} />
        </Description>
        <RaitingComponent movieDetails={movieDetails} />
      </Content>
      {movieDetails ? <DescriptionComponent /> : null}
    </Container>
  );
};
