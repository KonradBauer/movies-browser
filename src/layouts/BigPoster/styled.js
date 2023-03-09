import styled from "styled-components";
import { ReactComponent as Star } from "../../common/svg/star.svg";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1920px;
  max-height: 769px;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
`;

export const Poster = styled.img`
  max-width: 1920px;
  max-height: 770px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    max-width: 80%;
    max-height: auto;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  width: 1368px;
  height: 769px;
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
`;

export const MainInfo = styled.div`
  position: absolute;
  width: 45%;
  height: auto;
  left: 13%;
  top: 70%;
  border: 1px solid black;
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
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 15px;
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

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;
