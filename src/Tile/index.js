import {
  Container,
  Description,
  Info,
  Content,
  Poster,
  Raiting,
  Rate,
  StarIcon,
  Tag,
  Tags,
  TextTag,
  Title,
  Votes,
  Year,
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

export const Tile = ({ movieDetails, srcImage }) => {
  return (
    <Container movieDetails={movieDetails}>
      <Poster movieDetails={movieDetails} src={srcImage ? srcImage : noPoster} alt="" />
      <Content movieDetails={movieDetails}>
        <Description movieDetails={movieDetails}>
          <Info>
            <Title movieDetails={movieDetails}>Mulan</Title>
            <Year movieDetails={movieDetails}>2020</Year>
          </Info>
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
          <Tags movieDetails={movieDetails}>
            <Tag>
              <TextTag movieDetails={movieDetails}>Action</TextTag>
            </Tag>
            <Tag>
              <TextTag movieDetails={movieDetails}>Drama</TextTag>
            </Tag>
            <Tag>
              <TextTag movieDetails={movieDetails}>Adventure</TextTag>
            </Tag>
          </Tags>
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
