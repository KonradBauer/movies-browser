import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

export const ContainerLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  position: relative;
  padding: 16px;
  border-radius: 5px;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: transform 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    display: flex;
    gap: 16px;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px rgb(140, 172, 228);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 5px;
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    width: 114px;
    height: 169px;
    flex-shrink: 0;
    aspect-ratio: unset;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  border: 3px solid rgba(0, 68, 204, 0.2);
  border-top-color: ${({ theme }) => theme.color.scienceBlue};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  border-radius: 5px;
  width: 100%;
  aspect-ratio: 2/3;
  display: block;
  transition: opacity 0.3s;

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
