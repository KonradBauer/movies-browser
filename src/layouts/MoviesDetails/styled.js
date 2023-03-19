import styled from "styled-components";
import { ReactComponent as Star } from "../../common/svg/star.svg";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 769px;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
`;

export const Poster = styled.img`
  max-width: 1920px;
  max-height: 770px;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    max-width: 80%;
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
    top: 60%;
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 35px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 24px;
    font-weight: 500;
    width: 214px;
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
  height: auto;
`;

export const RaitingNumber = styled.text`
  max-width: 50%;
  height: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;

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
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 426px) and (max-width: 578px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 579px) and (max-width: 847px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 848px) and (max-width: 1059px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 1060px) and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
