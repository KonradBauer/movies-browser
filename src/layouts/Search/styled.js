import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 56px auto;
  padding: 0 clamp(16px, 3vw, 64px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
    max-width: 1440px;
  }
`;

export const SearchResults = styled.h1`
  font-weight: 600;
  font-size: clamp(20px, 4vw, 36px);
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const MoviesTilesList = styled.ul`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const PeopleTilesList = styled.ul`
  list-style: none;
  padding: 24px 0 0;
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
