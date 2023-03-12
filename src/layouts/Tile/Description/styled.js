import styled, { css } from "styled-components";

export const MovieDescription = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  line-height: 1.6;
  max-width: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    line-height: 1.6;
  }

  ${({ personDetails }) =>
    personDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 256px;
      }
    `}
`;
