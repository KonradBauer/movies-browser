import styled from "styled-components";
import { ReactComponent as Star } from "../../common/svg/star.svg";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
  z-index: -3;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
  box-shadow: inset 0px 0px 50px 60px ${({ theme }) => theme.color.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
    max-width: 1440px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
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

export const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(24px, 5vw, 64px);
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-bottom: 5px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    font-size: 13px;
  }
`;

export const ContentBackground = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
`;

const ResponsiveContent = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Content = styled(ResponsiveContent)`
  margin-bottom: 100px;
`;

export const TileContent = styled(ResponsiveContent)`
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CastContent = styled(ResponsiveContent)`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-top: 0;
  }
`;

export const CrewContent = styled(ResponsiveContent)`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 21px;
  }
`;

export const SubdivTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: clamp(20px, 3vw, 36px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin: 0 0 32px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 24px 16px 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(202px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fill, minmax(166px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  }
`;
