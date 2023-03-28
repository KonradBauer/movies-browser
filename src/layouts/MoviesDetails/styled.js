import styled from "styled-components";
import { ReactComponent as Star } from "../../common/svg/star.svg";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 769px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const Poster = styled.img.attrs((props) => ({ src: props.source }))`
  margin: 0 auto;
  max-width: 1920px;
  max-height: 770px;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    max-width: 100%;
    max-height: auto;
  }
`;

export const Shadow = styled.div`
  max-width: 1920px;
  max-height: 769px;
`;

export const MainInfo = styled.div`
  position: absolute;
  width: 45%;
  height: auto;
  left: 5%;
  top: 70%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 214px;
    top: 65%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    top: 60%;
  }
`;

export const Title = styled.text`
  max-width: 503px;
  max-height: 77px;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: -30px;
    max-width: 1000px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 35px;
    width: 700px;
    margin-bottom: -35px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    max-width: 260px;
    margin-bottom: -30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 20px;
  }
`;

export const Raiting = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  margin-top: 1%;
  width: 20%;
  height: auto;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-bottom: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    margin-bottom: 0;
  }
`;

export const StyledStar = styled(Star)`
  max-width: 50%;
  margin-top: 40px;
  height: auto;
`;

export const RaitingNumber = styled.text`
  max-width: 50%;
  height: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 35px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 15px;
  }
`;

export const RaitingCap = styled.text`
  width: 28px;
  right: 1518px;
  top: 23.93%;
  bottom: 75.46%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const Votes = styled.div`
  margin-top: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    margin-top: -13px;

    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    display: flex;
    justify-content: center;
    margin-top: -13px;
    margin-right: -10px;
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    display: flex;
    margin-top: -13px;
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: -13px;
    margin-right: 8px;
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
  line-height: 120%;
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
