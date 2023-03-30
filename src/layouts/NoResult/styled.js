import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  max-width: 1368px;
  margin-top: 50px;
`;

export const Disclaimer = styled.span`
  max-height: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 10px;
  }
`;

export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
`;
