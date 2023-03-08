import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../common/svg/spinner.svg";

export const Disclaimer = styled.span`
  margin-top: 50px;
  margin-left: 276px;
  max-width: 674px;
  max-height: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    margin: auto;
    margin-top: 50px;
    margin-left: 15px;
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    margin: auto;
    margin-top: 24px;
    margin-left: 16px;
    font-size: 14px;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 219px;
  max-width: 1920px;

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
