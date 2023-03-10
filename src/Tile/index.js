import {
  Container,
  Description,
  Content,
  Poster,
  ProdAndReleaseInfo,
  Production,
  ReleaseDateText,
  ReleaseDateContent,
  ReleaseDate,
  ProductionText,
  ProductionContent,
} from "./styled";
import noPoster from "../common/images/no-poster.png";
import { TagsComponent } from "./Tags";
import { Information } from "./Information";
import { RaitingComponent } from "./Raiting";
import { DescriptionComponent } from "./Description";

export const Tile = ({ movieDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails}>
      <Poster movieDetails={movieDetails} src={srcImage ? srcImage : noPoster} alt="" />
      <Content movieDetails={movieDetails}>
        <Description movieDetails={movieDetails}>
          <Information />
          {movieDetails ? (
            <ProdAndReleaseInfo>
              <Production>
                <ProductionText>Production:</ProductionText>
                <ProductionContent>China, USA</ProductionContent>
              </Production>
              <ReleaseDate>
                <ReleaseDateText>Release date:</ReleaseDateText>
                <ReleaseDateContent>24.10.2020</ReleaseDateContent>
              </ReleaseDate>
            </ProdAndReleaseInfo>
          ) : null}
          <TagsComponent movieDetails={movieDetails} />
        </Description>
        <RaitingComponent movieDetails={movieDetails} />
      </Content>
      {movieDetails ? (
        <DescriptionComponent />
      ) : null}
    </Container>
  );
};
