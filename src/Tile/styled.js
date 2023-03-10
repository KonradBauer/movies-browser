import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../common/svg/shape-star.svg";

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

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      max-width: 1368px;
      height: fit-content;
      max-height: 544px;
      padding: 40px;
      display: grid;
      grid-template-columns: 312px 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 27px 40px;
      grid-template-areas:
        "Poster Information"
        "Poster Description";

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        max-width: 288px;
        height: 400px;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
    `}
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      width: 312px;
      height: 464px;
      grid-area: Poster;
    `}
`;

export const Content = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      max-width: 936px;
      padding: 8px 0 0;
      grid-area: Information;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0;
      }
    `}
`;

export const Description = styled.div`
  margin: 16px 0 39px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 0 8px;
  }

  ${({ movieDetails }) =>
    movieDetails &&
    css`
      margin: 0;
    `}
`;

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
        color: ${({theme})=>theme.color.waterloo};
        margin-bottom: 8px;
      }
    `}
`;

export const ProdAndReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 0;
  }
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

export const Production = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductionText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   display: none;
  }
`;

export const ProductionContent = styled(BlackColorText)``;

export const ReleaseDate = styled.div`
  display: flex;
  gap: 11px;
`;

export const ReleaseDateText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const ReleaseDateContent = styled(BlackColorText)``;

export const Tags = styled.div`
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
        margin-bottom: 8px;
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
  font-weight: 400;
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
      line-height
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
        color: ${({theme})=>theme.color.waterloo};
        font-size: 13px;
        line-height: 1.3;
      }
    `}
`;

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
