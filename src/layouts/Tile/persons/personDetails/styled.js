import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ personDetails }) =>
    personDetails &&
    css`
      border-radius: 5px;
      margin: 10px auto;
      padding: 40px;
      width: 1368px;
      max-width: 1368px;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: repeat(2, auto);
      gap: 24px 40px;
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
  ${({ personDetails }) =>
    personDetails &&
    css`
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

export const DescriptionContainer = styled.div`
  ${({ personDetails }) =>
    personDetails &&
    css`
      margin: 8px 0 0;
      display: flex;
      flex-direction: column;
      gap: 24px;
      grid-area: 1 / 2 / 2 / 3;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 0 8px;
        gap: 16px;
        grid-area: 1 / 2 / 2 / 3;
      }
    `}
`;
