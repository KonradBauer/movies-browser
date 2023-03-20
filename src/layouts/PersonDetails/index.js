import {
  CastContent,
  Content,
  ContentBackground,
  CrewContent,
  List,
  SubdivTitle,
  TileContent,
} from "./styled";
import poster from "../../common/images/poster.png";
import person from "../../common/images/person.png";
import { Tile } from "../Tile/index";
export const PersonDetails = () => {
  return (
    <>
      <ContentBackground>
        <Content>
          <TileContent>
            <Tile personDetails={"personDetails"} srcImage={person} />
          </TileContent>
          <CastContent>
            <SubdivTitle>Movies - cast()</SubdivTitle>
            <List>
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
            </List>
          </CastContent>
          <CrewContent>
            <SubdivTitle>Movies - crew()</SubdivTitle>
            <List>
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
              <Tile movie={"movie"} srcImage={poster} />
            </List>
          </CrewContent>
        </Content>
      </ContentBackground>
    </>
  );
};
