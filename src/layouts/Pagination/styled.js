import styled from "styled-components";
import { ReactComponent as VectorLeft } from "../../common/svg/vectorLeft.svg";
import { ReactComponent as VectorRight } from "../../common/svg/vectorRight.svg";

export const StyledVectorLeft = styled(VectorLeft)`
  color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.waterloo
      : ({ theme }) => theme.color.scienceBlue};
`;

export const StyledVectorRight = styled(VectorRight)`
  color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.waterloo
      : ({ theme }) => theme.color.scienceBlue};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding-bottom: 109px;
  gap: 24px;
  max-width: 525px;
  width: 100%;
  margin: 40px auto 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-bottom: 31px;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const ButtonFirst = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  pointer-events: ${(props) => (props.buttonDisabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.mystic
      : ({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "Pointer")};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 23px;
    padding: 8px 12px;
    gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 23px;
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ButtonPrevious = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  pointer-events: ${(props) => (props.buttonDisabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.mystic
      : ({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "Pointer")};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 23px;
    padding: 8px 12px;
    gap: 8px;
  }
`;

export const ButtonNext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  pointer-events: ${(props) => (props.buttonDisabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.mystic
      : ({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "Pointer")};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 24px;
    padding: 8px 12px;
    gap: 8px;
  }
`;

export const ButtonLast = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  pointer-events: ${(props) => (props.buttonDisabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.buttonDisabled
      ? ({ theme }) => theme.color.mystic
      : ({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "Pointer")};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    padding: 8px 12px;
    gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 24px;
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 24px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    gap: 2px;
    width: 100%;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
  }
`;

export const Page = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const Of = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const PageNumber = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const PageTotal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
