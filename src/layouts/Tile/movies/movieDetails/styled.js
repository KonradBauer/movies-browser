import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ movieDetails }) =>
    movieDetails &&
    css`
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
      gap: 27px 40px;
      margin: 10px auto;
      padding: 40px;
      background: ${({ theme }) => theme.color.white};
      box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: 100%;
        padding: 16px;
        grid-template-columns: auto 1fr;
        gap: 16px;
      }
    `}
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  ${({ movieDetails }) =>
    movieDetails &&
    css`
      border-radius: 5px;
      max-width: 312px;
      grid-area: 1 / 1 / 3 / 2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 114px;
        grid-area: 1 / 1 / 2 / 2;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
        max-width: 105px;
      }
    `}
`;

export const MovieContainer = styled.div`
  ${({ movieDetails }) =>
    movieDetails &&
    css`
      max-width: 936px;
      padding: 8px 0 0;
      grid-area: 1 / 2 / 2 / 3;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        grid-area: 1 / 2 / 2 / 3;
      }
    `}
`;

export const DescriptionContainer = styled.div`
      margin: 0;
`;
