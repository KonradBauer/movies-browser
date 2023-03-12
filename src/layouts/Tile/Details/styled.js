import styled, { css } from "styled-components";

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 0;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      margin: 0;
    `}
`;

const StormGrayColorText = styled.div`
  color: ${({ theme }) => theme.color.stormGray};
`;

const BlackColorText = styled.div`
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const FirstDetails = styled.div`
  display: flex;
  gap: 10px;

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        gap: 4px;
      }
    `}
`;

export const FirstDetailsText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        font-size: 12px;
      }
    `}
`;

export const FirstDetailsContent = styled(BlackColorText)``;

export const SecondDetails = styled.div`
  display: flex;
  gap: 11px;

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
    `}
`;

export const SecondDetailsText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: block;
        font-size: 12px;
      }
    `}
`;

export const SecondDetailsContent = styled(BlackColorText)``;
