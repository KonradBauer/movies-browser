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

  ${({ person }) =>
    person &&
    css`
      max-width: 208px;
      height: 339px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 136px;
        height: 245px;
        padding: 8px;
        gap: 8px;
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

  ${({ person }) =>
    person &&
    css`
      width: 176px;
      height: 231px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 120px;
        height: 178px;
      }
    `}
`;
