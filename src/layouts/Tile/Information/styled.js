import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ person }) =>
    person &&
    css`
      text-align: center;
      gap: 8px;
      margin: 0;
    `}
`;

export const FirstInformation = styled.h2`
  color: ${({ theme }) => theme.color.woodSmoke};
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

  ${({ person }) =>
    person &&
    css`
      @media (max-width: 1400px) {
        font-size: 18px;
      }

      @media (max-width: 920px) {
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
      }
    `}

  ${({ personDetails }) =>
    personDetails &&
    css`
      font-size: 36px;
      font-weight: 600;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
      }
    `}
`;

export const SecondInformation = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
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

  ${({ person }) =>
    person &&
    css`
      font-size: 18px;

      ${({ role }) => role && `display: inline;`}

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
      }
    `}

    ${({ personDetails }) => personDetails && `display: none;`}
`;
