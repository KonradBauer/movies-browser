import styled from "styled-components";
import { ReactComponent as Logo } from "../common/svg/logo.svg";

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1920px;
  height: 94px;
  background: ${({ theme }) => theme.color.black};
`;

export const StyledLogo = styled(Logo)`
  margin-left: 293px;
`;
