import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../../common/svg/shape-star.svg";

export const Raiting = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    position: inherit;
    gap: 8px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      position: unset;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 0;
      }
    `}
`;

export const StarIcon = styled(Star)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.div`
  color: ${({ theme }) => theme.color.black};
  display: flex;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      font-size: 22px;
      font-weight: 500;
      line-height: 1.3;
    `}
`;

export const MaxRate = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  align-self: center;

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
      }
    `}
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    margin-left: -1px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      color: ${({ theme }) => theme.color.black};
      align-self: center;
      font-size: 14px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        color: ${({ theme }) => theme.color.waterloo};
        font-size: 13px;
        line-height: 1.3;
      }
    `}
`;
