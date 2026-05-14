import styled, { keyframes, css } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const shimmerCss = css`
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

export const SkeletonLine = styled.div`
  ${shimmerCss}
  height: 14px;
  width: ${({ $width }) => $width || "100%"};
`;

const cardBase = css`
  padding: 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const SkeletonMovieCard = styled.li`
  ${cardBase}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    display: flex;
    gap: 16px;
  }
`;

export const SkeletonPersonCard = styled.li`
  ${cardBase}
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    padding: 8px;
    gap: 8px;
  }
`;

export const SkeletonMovieImage = styled.div`
  ${shimmerCss}
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    width: 114px;
    height: 169px;
    flex-shrink: 0;
    aspect-ratio: unset;
  }
`;

export const SkeletonPersonImage = styled.div`
  ${shimmerCss}
  width: 100%;
  aspect-ratio: 7/10;
  border-radius: 5px;
`;

export const SkeletonMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-top: 0;
    flex: 1;
  }
`;

export const SkeletonTagsRow = styled.div`
  display: flex;
  gap: 8px;
`;
