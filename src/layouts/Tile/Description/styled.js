import styled, { css } from "styled-components";

export const DescriptionContent = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.beforeMobileMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-area: 2 / 1 / 3 / 3;
    font-size: 14px;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 256px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.theSmallestMobileView}px) {
        width: 228px;
      }
    `}
`;
