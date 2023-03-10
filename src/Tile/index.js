import {
  Container,
  Description,
  Content,
  Poster,
  Raiting,
  Rate,
  StarIcon,
  Votes,
  ProdAndReleaseInfo,
  Production,
  ReleaseDateText,
  ReleaseDateContent,
  ReleaseDate,
  ProductionText,
  ProductionContent,
  MovieDescription,
  MaxRate,
} from "./styled";
import noPoster from "../common/images/no-poster.png";
import { TagsComponent } from "./Tags";
import { Information } from "./Information";

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
        <Raiting movieDetails={movieDetails}>
          <StarIcon alt="" />
          <Rate movieDetails={movieDetails}>
            7,8{movieDetails ? <MaxRate movieDetails={movieDetails}>/ 10</MaxRate> : null}
          </Rate>
          <Votes movieDetails={movieDetails}>35 votes</Votes>
        </Raiting>
      </Content>
      {movieDetails ? (
        <MovieDescription>
          A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father. A young Chinese maiden
          disguises herself as a male warrior in order to save her father.
        </MovieDescription>
      ) : null}
    </Container>
  );
};
