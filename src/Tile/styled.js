import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 324px;
  height: 650px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    height: 201px;
    display: flex;
    gap: 16px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      max-width: 1368px;
      height: fit-content;
      max-height: 544px;
      padding: 40px;
      display: grid;
      grid-template-columns: 312px 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 27px 40px;
      grid-template-areas:
        "Poster Information"
        "Poster Description";

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 288px;
        height: 400px;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
    `}
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      width: 312px;
      height: 464px;
      grid-area: Poster;
    `}
`;

export const Content = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      max-width: 936px;
      padding: 8px 0 0;
      grid-area: Information;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0;
      }
    `}
`;

export const Description = styled.div`
  margin: 16px 0 39px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 0 8px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      margin: 0;
    `}
`;
