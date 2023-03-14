import { BoxTitle, MainBox, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import poster from "../../common/images/poster.png";

export const Content = () => {
  return (
    <MainBox>
      <Section>
        <BoxTitle>Popular movies</BoxTitle>
        <TilesList>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
          <li>
            <Tile movie={"movie"} srcImage={poster} />
          </li>
        </TilesList>
      </Section>
    </MainBox>
  );
};
