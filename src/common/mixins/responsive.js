import { css } from 'styled-components';

export const containerFluid = css`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 64px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
    max-width: 1440px;
  }
`;

export const gridResponsive = (minCardWidth = '280px') => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${minCardWidth}, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    gap: 16px;
  }
`;

export const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const responsivePadding = css`
  padding: clamp(16px, 4vw, 64px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
  }
`;
