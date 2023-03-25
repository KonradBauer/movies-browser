import styled from "styled-components";

export const MainBox = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 40px;
  max-width: 1368px;
  height: 1391px;
  padding: 16px;
  padding-top: 0;
  background: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
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
  gap: 16px;
  padding: 16px 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
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
  grid-template-columns: repeat(auto-fill, minmax(202px, auto));
  gap: 24px;
  padding-top: 24px;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(auto-fill, minmax(166px, auto));
    gap: 16px;
  }

  @media (max-width: 933px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, auto));
  }
`;
