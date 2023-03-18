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

  ${({ personDetails }) =>
    personDetails &&
    css`
      max-width: 1368px;
      padding: 40px;
      display: grid;
      grid-template-columns: 399px 1fr;
      grid-template-rows: auto 1fr;
      gap: 24px 40px;
      grid-template-areas:
        "Poster Information"
        "Poster Description";

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 290px;
        height: 365px;
        padding: 16px;
        display: grid;
        grid-template-columns: 116px 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          "Poster Information"
          "Description Description";
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.theSmallestMobileView}px) {
        height: 410px;
      }
    `}
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  border-radius: 5px;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }

    ${({ personDetails }) =>
    personDetails &&
    css`
      width: 399px;
      height: 564px;
      grid-area: Poster;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 116px;
        height: 163px;
        grid-area: Poster;
      }
    `}
`;

export const DescriptionContainer = styled.div`
  margin: 16px 0 39px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 0 8px;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      margin: 8px 0 0;
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 16px;
      }
    `}
`;
