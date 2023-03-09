import {
  Background,
  MainInfo,
  Poster,
  Raiting,
  RaitingCap,
  RaitingNumber,
  StyledStar,
  Title,
  Votes,
  Wrapper,
} from "./styled";
import PosterBig from "../../common/images/posterBig.png";

export const BigPoster = () => {
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
    </>
  );
};
