import {
  Background,
  CastContent,
  Content,
  ContentBackground,
  CrewContent,
  MainInfo,
  Poster,
  Raiting,
  RaitingCap,
  RaitingNumber,
  StyledStar,
  SubdivTitle,
  TileContent,
  Title,
  Votes,
} from "./styled";
import poster from "../../common/images/poster.png";
import PosterBig from "../../common/images/posterBig.png";
import { Tile } from "../Tile";

export const MoviesDetails = () => {
  return (
    <>
      <Background>
        <Poster src={PosterBig} alt="movie poster" />
        <MainInfo>
          <Title>Mulan long title</Title>
          <Raiting>
            <StyledStar />
            <RaitingNumber>
              7,8
              <RaitingCap>/10</RaitingCap>
            </RaitingNumber>
          </Raiting>
          <Votes>335 votes</Votes>
        </MainInfo>
      </Background>
      <ContentBackground>
        <Content>
          <TileContent>
            <Tile movieDetails={MoviesDetails} srcImage={poster} />
          </TileContent>
          <CastContent>
            <SubdivTitle>Cast</SubdivTitle>
          </CastContent>
          <CrewContent>
            <SubdivTitle>Crew</SubdivTitle>
          </CrewContent>
        </Content>
      </ContentBackground>
    </>
  );
};
