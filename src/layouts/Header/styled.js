import styled from "styled-components";
import { ReactComponent as Logo } from "../../common/svg/logo.svg";
import { ReactComponent as Loupe } from "../../common/svg/loupe.svg";

export const HeadContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-family: "Poppins", sans-serif;
  gap: 8px;
  padding: 0 32px 0 20px;
  height: 64px;
  background: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 16px;
    row-gap: 10px;
  }
`;

export const StyledLogo = styled(Logo)`
  flex-shrink: 0;
  height: 40px;
  width: auto;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 32px;
    margin-right: 4px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`;

const NavButtonBase = styled.button`
  height: 40px;
  padding: 0 18px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.pattensBlue};
    outline-offset: 2px;
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    height: 34px;
    padding: 0 14px;
  }
`;

export const MoviesButton = NavButtonBase;
export const PeopleButton = NavButtonBase;

export const Box = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  height: 40px;
  min-width: 160px;
  max-width: 432px;
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex: 0 0 100%;
    max-width: none;
    min-width: 0;
    margin-left: 0;
    height: 38px;
  }
`;

export const StyledLoupe = styled(Loupe)`
  flex-shrink: 0;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 14px;
    height: 17px;
    width: 17px;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.stormGray};
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.color.waterloo};
    color: ${({ theme }) => theme.color.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.scienceBlue};
    outline-offset: 2px;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  outline: none;
  border: none;
  margin-left: 16px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.waterloo};
  background: transparent;

  &::placeholder {
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;
