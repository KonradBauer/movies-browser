import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";

export const Disclaimer = styled.span`
  margin: 50px auto 0;
  max-width: 90%;
  padding: 0 16px;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(18px, 4vw, 36px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 24px;
  }
`;

export const SpinnerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  height: 100vh;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin-top: 24px;
  }
`;

const rotate = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 35px;
    height: 35px;
  }
`;
