import styled from "styled-components";

export const Disclaimer = styled.span`
  margin-top: 50px;
  margin-left: 276px;
  max-width: 674px;
  max-height: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
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
