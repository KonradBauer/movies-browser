import styled from "styled-components";

export const MainBox = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 40px;
  max-width: 1368px;
  height: 1391px;
  background: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 288px;
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    max-width: 1080px;
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.beforeMobileMax}px) {
    max-width: 1000px;
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
    margin-top: 12px;
  }

  @media (max-width: 512px) {
    max-width: 500px;
    margin-top: 12px;
  }
`;

export const Section = styled.section`
  display: block;
`;

export const BoxTitle = styled.span`
  width: 285px;
  height: 43px;
  margin-bottom: 34px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-left: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 143px;
    height: 22px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.beforeMobileMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }

  @media (max-width: 512px) {
    font-size: 18px;
  }
`;

export const TilesList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.beforeMobileMax}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PersonTilesList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.beforeMobileMax}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) and (max-width: 910px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
