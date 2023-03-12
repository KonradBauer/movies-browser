import styled, { css } from "styled-components";

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  max-width: 279px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 107px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      gap: 16px;
      max-width: 295px;
      margin-bottom: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 8px;
        margin-bottom: 0;
      }
    `}
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
  }
`;

export const TextTag = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    line-height: 1.1;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      line-height: 1;
    `}
`;
