import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.div`
  ${({ movieDetails }) =>
    movieDetails &&
    css`
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: repeat(2, auto);
      gap: 27px 40px;
      margin: 10px auto;
      padding: 40px;
      width: 100%;
      max-width: 1368px;
      box-sizing: border-box;
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

export const ImageWrapper = styled.div`
  max-width: 312px;
  width: 312px;
  aspect-ratio: 2/3;
  border-radius: 5px;
  grid-area: 1 / 1 / 3 / 2;
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 114px;
    width: 114px;
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 105px;
    width: 105px;
  }
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  ${({ movieDetails }) =>
    movieDetails &&
    css`
      border-radius: 5px;
      width: 100%;
      display: block;
      transition: opacity 0.3s;
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
