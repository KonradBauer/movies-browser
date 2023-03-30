import styled from "styled-components";
import { ReactComponent as Logo } from "../../common/svg/logo.svg";
import { ReactComponent as Loupe } from "../../common/svg/loupe.svg";

export const HeadContainer = styled.div`
  position: relative;
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 94px;
  background: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 142px;
    flex-wrap: wrap;
  }
`;

export const StyledLogo = styled(Logo)`
  margin-right: 30px;
  margin-left: 20px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    margin: auto;
    margin-left: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: auto;
    margin-left: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: wrap;
    display: flex;
    height: 60px;
    width: 110px;
    margin: auto;
    margin-left: 20px;
    flex-wrap: wrap;
    flex-shrink: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    display: flex;
    height: 60px;
    width: 90px;
    margin: auto;
    flex-wrap: wrap;
    flex-shrink: none;
  }
`;

export const ButtonsBox = styled.div`
  margin-left: 20px;
  display: flex;
  text-decoration: none;
  gap: 10px;
  justify-content: center;
`;

export const MoviesButton = styled.button`
  width: 95px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: auto;
    flex-wrap: nowrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin: auto;
    flex-wrap: nowrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: auto;

    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 12px;
    width: 70px;
    height: 35px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const PeopleButton = styled.button`
  width: 95x;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 19px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: auto;
    flex-wrap: nowrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: auto;
    flex-wrap: nowrap;
    flex-shrink: 1;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 12px;
    width: 70px;
    height: 35px;
    margin-left: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 48px;
  width: 432px;
  margin-left: 300px;
  margin-right: 50px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: auto;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) and (max-width: 1250px) {
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    margin: 0px 16px 15px;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin: 0px 16px 15px;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  @media screen and (min-width: 280px) and (max-width: 361px) {
    margin: 0px 16px 15px;
    flex-wrap: wrap;
    flex-shrink: 1;
  }
`;

export const StyledLoupe = styled(Loupe)`
  margin-left: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin-left: 15px;
    height: 18px;
    width: 18px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  border: none;
  width: 73%;
  align-items: center;
  margin-left: 19px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};

  &::placeholder {
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin-left: 3px;

    &::placeholder {
      color: inherit;
      font-size: 13px;
    }
  }
`;
