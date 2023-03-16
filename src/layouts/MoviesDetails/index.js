import {
  Background,
  CastContent,
  Content,
  ContentBackground,
  CrewContent,
  List,
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
import person from "../../common/images/poster.png";
import poster from "../../common/images/poster.png";
import PosterBig from "../../common/images/posterBig.png";
import { Tile } from "../Tile/index";
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
            <List>
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
            </List>
          </CastContent>
          <CrewContent>
            <SubdivTitle>Crew</SubdivTitle>
            <List>
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
              <Tile person={"person"} srcImage={person} role={"Rola"} />
            </List>
          </CrewContent>
        </Content>
      </ContentBackground>
    </>
  );
};
