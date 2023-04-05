import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  margin: 56px auto;
  padding: 0 16px;
`;

export const SearchResults = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 14px;
  }
`;

export const MoviesTilesList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  padding: 16px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PeopleTilesList = styled.ul`
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
