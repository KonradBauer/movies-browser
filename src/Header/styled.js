import styled from "styled-components";
import { ReactComponent as Logo } from "../common/svg/logo.svg";
import { ReactComponent as Loupe } from "../common/svg/loupe.svg";

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1920px;
  height: 94px;
  background: ${({ theme }) => theme.color.black};
`;

export const StyledLogo = styled(Logo)`
  display: flex;
  flex-shrink: 0;
  margin-left: 293px;
  margin-right: 80px;
`;

export const MoviesButton = styled.button`
  width: 102px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  gap: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:focus {
    border: 1px solid #ffffff;
    border-radius: 24px;
    width: 102px;
    height: 48px;
  }
`;

export const PeopleButton = styled.button`
  width: 102px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 8px 24px;
  gap: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:focus {
    border: 1px solid #ffffff;
    border-radius: 24px;
    width: 102px;
    height: 48px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 48px;
  width: 432px;
  margin-left: 411px;
  border: 1px solid #e4e6f0;
  border-radius: 33px;
  background: ${({ theme }) => theme.color.white};
`;

export const StyledLoupe = styled(Loupe)`
  margin-left: 24px;
`;

export const Input = styled.input`
  display: flex;
  border: none;
  width: 75%;
  align-items: center;
  margin-left: 19px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};

  &::placeholder {
    color: inherit;
    content: "Search for movies...";
  }
`;
