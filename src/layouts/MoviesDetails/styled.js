import styled from "styled-components";
import { ReactComponent as Star } from "../../common/svg/star.svg";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
  z-index: -3;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1368px;
  margin: 0 auto;
  box-shadow: inset 0px 0px 50px 60px ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    box-shadow: inset 0px 0px 50px 30px ${({ theme }) => theme.color.black};
  }
`;

export const Poster = styled.img.attrs((props) => ({ src: props.source }))`
  max-width: 100%;
  max-height: 769px;
  position: relative;
  z-index: -1;
`;

export const MainInfo = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  bottom: 7%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    left: 3%;
    bottom: 5%;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 5px;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 18px;
  }
`;

export const RaitingWrapper = styled.div`
  display: grid;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Raiting = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 126px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
  }
`;

export const StyledStar = styled(Star)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const RaitingNumber = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
    gap: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 14px;
  }
`;

export const RaitingCap = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const Votes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const ContentBackground = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
`;

export const Content = styled.div`
  margin: auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const TileContent = styled.div`
  margin: auto;
  padding: 10px;
  max-width: 1368px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const CastContent = styled.div`
  max-width: 1368px;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
    margin-top: 0;
  }
`;

export const CrewContent = styled.div`
  max-width: 1368px;
  margin-top: 64px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    margin-top: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const SubdivTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  width: 86px;
  height: 43px;
  margin-left: 10px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 20px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 24px 16px 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(202px, auto));
  gap: 24px;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(auto-fill, minmax(166px, auto));
    gap: 16px;
  }

  @media (max-width: 933px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, auto));
  }
`;
