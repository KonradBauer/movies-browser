import { BoxTitle, MainBox, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";

export const Content = () => {
  return (
    <MainBox>
      <Section>
        <BoxTitle>Popular movies</BoxTitle>
        <TilesList>
          <Tile movie />
        </TilesList>
      </Section>
    </MainBox>
  );
};
