import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      max-width: 208px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 12px;
      background: ${({ theme }) => theme.color.white};
      box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px;
        gap: 8px;
      }
    `}
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      /* max-width: 176px; */
      width: 100%;
    `}
`;
