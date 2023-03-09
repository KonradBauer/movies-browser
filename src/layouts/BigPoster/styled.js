import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1920px;
  max-height: 769px;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
`;

export const Poster = styled.img`
  max-width: 1920px;
  max-height: 770px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    max-width: 80%;
    max-height: auto;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  width: 1368px;
  height: 769px;
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
`;

export const MainInfo = styled.div`
  position: absolute;
  width: 30%;
  height: auto;
  left: 13%;
  top: 70%;
  border: 1px solid black;
`;

export const Title = styled.text`
  width: 503px;
  height: 77px;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
`;
