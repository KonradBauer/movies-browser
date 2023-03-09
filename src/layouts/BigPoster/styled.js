import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1920px;
  height: 769px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Poster = styled.img`
  width: 1368px;
  height: 769px;
  position: relative;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 1368px;
  height: 769px;
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
  box-shadow: inset -2px 8px 35px 38px rgba(0, 0, 0, 1);
`;
