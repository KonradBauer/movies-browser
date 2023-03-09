import { Background, Poster, Shadow } from "./styled";
import PosterBig from "../../common/images/posterBig.png";

export const BigPoster = () => {
  return (
    <Background>
      <Poster src={PosterBig} alt="" />
      <Shadow />
    </Background>
  );
};
