import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const ContainerLink = styled(NavLink)`
  ${({ person }) =>
    person &&
    css`
      text-decoration: none;
      border-radius: 5px;
      max-width: 208px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 12px;
      color: ${({ theme }) => theme.color.black};
      background: ${({ theme }) => theme.color.white};
      box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
      transition: transform 0.5s;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px;
        gap: 8px;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 15px rgb(140, 172, 228);
      }
    `}
`;

export const Image = styled.img.attrs((props) => ({ src: props.source }))`
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      width: 100%;
    `}
`;
