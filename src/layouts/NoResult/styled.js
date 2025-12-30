import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 50px auto 0;
  padding: 0 clamp(16px, 3vw, 64px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
    max-width: 1440px;
  }
`;

export const Disclaimer = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: clamp(18px, 4vw, 36px);
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
`;
