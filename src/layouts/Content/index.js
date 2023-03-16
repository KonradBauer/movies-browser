import { BoxTitle, MainBox, PersonTilesList, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";

export const Content = () => {
  return (
    <MainBox>
      <Section>
        <BoxTitle>Popular movies</BoxTitle>
        <TilesList>
          <Tile movie={"movie"} />
        </TilesList>
      </Section>
    </MainBox>
  );
};

export const PeopleContent = () => {
  return (
    <MainBox>
      <Section>
        <BoxTitle>Popular people</BoxTitle>
        <PersonTilesList>
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
          <Tile person={"person"} />
        </PersonTilesList>
      </Section>
    </MainBox>
  );
};
