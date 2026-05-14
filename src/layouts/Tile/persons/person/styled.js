import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const ContainerLink = styled(NavLink)`
  ${({ person }) =>
    person &&
    css`
      text-decoration: none;
      border-radius: 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 12px;
      color: ${({ theme }) => theme.color.black};
      background: ${({ theme }) => theme.color.white};
      box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
      transition: transform 0.5s;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
        padding: 8px;
        gap: 8px;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 15px rgb(140, 172, 228);
      }
    `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 7/10;
  border-radius: 5px;
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      width: 100%;
      aspect-ratio: 7/10;
      display: block;
      transition: opacity 0.3s;
    `}
`;
