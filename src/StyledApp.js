import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
    width: 102px;
    height: 48px;

    &:focus {
      border: 1px solid #ffffff;
      border-radius: 24px;
      width: 70px;
      height: 35px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
      font-size: 12px;
      width: 70px;
      height: 35px;
      margin-left: 0;

      &:focus {
        border: 1px solid #ffffff;
        border-radius: 24px;
        width: 70px;
        height: 35px;
      }
    }
  }
`;
