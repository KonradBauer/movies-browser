import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding-bottom: 109px;
  gap: 24px;
  width: 525px;
  margin: auto;
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    padding-bottom: 31px;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 24px;
    padding-bottom: 31px;
    gap: 8px;
  }
`;

export const ButtonFirst = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  background-color: ${(props) => (props.buttonDisabled ? "red" : "blue")};
  border-radius: 5px;
  cursor: pointer;

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
  background-color: ${(props) => (props.buttonDisabled ? "red" : "blue")};
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 23px;
    padding: 8px 12px;
    gap: 8px;
  }

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
  background-color: ${(props) => (props.buttonDisabled ? "red" : "blue")};
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    padding: 8px 12px;
    gap: 8px;
  }

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
  background-color: ${(props) => (props.buttonDisabled ? "red" : "blue")};
  border-radius: 5px;
  cursor: pointer;

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

export const Page = styled.text`
  width: 100%;
  height: 24px;
  display: flex;
  font-size: 16px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }
`;

export const Of = styled.text`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }
`;

export const PageNumber = styled.text`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }
`;

export const PageTotal = styled.text`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
  }
`;
