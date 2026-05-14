import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }
`;
