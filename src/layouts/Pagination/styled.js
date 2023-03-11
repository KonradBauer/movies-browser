import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 525px;
  margin: auto;
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;

export const ButtonFirst = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 76px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonPrevious = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 106px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonNext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 76px;
  background: ${({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonLast = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 76px;
  background: ${({ theme }) => theme.color.pattensBlue};
  border-radius: 5px;
  cursor: pointer;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 118px;
  height: 24px;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Page = styled.text`
  width: 41px;
  height: 24px;
  display: flex;
  align-items: center;
`;

export const Of = styled.text`
  width: 16px;
  height: 24px;
  display: flex;
  align-items: center;
`;

export const PageNumber = styled.text`
  width: 6px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const PageTotal = styled.text`
  width: 31px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
