import {
  Background,
  MainInfo,
  Poster,
  Raiting,
  RaitingCap,
  RaitingNumber,
  Shadow,
  StyledStar,
  Title,
} from "./styled";
import PosterBig from "../../common/images/posterBig.png";

export const BigPoster = () => {
  return (
    <>
      <Background>
        <Poster src={PosterBig} alt="" />
        <MainInfo>
          <Title>Mulan long title</Title>
          <Raiting>
            <StyledStar />
            <RaitingNumber>
              7,8
              <RaitingCap>/10</RaitingCap>
            </RaitingNumber>
          </Raiting>
        </MainInfo>
      </Background>
    </>
  );
};
