import { Background, MainInfo, Poster, Shadow, Title } from "./styled";
import PosterBig from "../../common/images/posterBig.png";

export const BigPoster = () => {
  return (
    <>
      <Background>
        <Poster src={PosterBig} alt="" />
        <MainInfo>
          <Title>Mulan long title</Title>
        </MainInfo>
      </Background>
    </>
  );
};
