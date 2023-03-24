import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  position: relative;
  padding: 16px;
  border-radius: 5px;
  max-width: 324px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    gap: 16px;
  }
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  border-radius: 5px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionContainer = styled.div`
  margin: 16px 0 39px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 0 8px;
  }
`;
