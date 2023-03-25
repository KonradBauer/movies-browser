import styled from "styled-components";
import { ReactComponent as Danger } from "../../common/svg/danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 180px;
  max-width: 592px;
  max-height: 201px;
`;

export const MainText = styled.span`
  margin-top: 38px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopHorizontalMax}px) {
    font-size: 30px;
    margin: auto;
    margin-top: 25px;
  }
`;

export const SubText = styled.span`
  margin: auto;
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  width: 426.53px;
  height: 58px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const StyledDanger = styled(Danger)`
  margin: auto;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 24px;
  padding: 16px 24px;
  gap: 10px;
  width: 181px;
  height: 51px;
  border-radius: 5px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
`;
