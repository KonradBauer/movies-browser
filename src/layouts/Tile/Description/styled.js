import styled from "styled-components";

export const MovieDescription = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  max-width: inherit;
  grid-area: Description;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    line-height: 1.6;
  }
`;
