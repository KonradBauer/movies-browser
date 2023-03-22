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
  }
`;
