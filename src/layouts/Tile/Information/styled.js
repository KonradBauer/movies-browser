import styled, { css } from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      font-size: 36px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 0;
      }
    `}
`;

export const Year = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    margin-top: 4px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-size: 22px;
      line-height: 1.2;
      margin-bottom: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        color: ${({ theme }) => theme.color.waterloo};
        margin-bottom: 8px;
      }
    `}
`;
