import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 525px;
  height: 36px;
  margin: auto;
  margin-top: 40px;
  border: 1px solid woodsmoke;
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
  height: 36px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
`;

export const ButtonPrevious = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 106px;
  height: 36px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
`;

export const ButtonNext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 76px;
  height: 36px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
`;

export const ButtonLast = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 76px;
  height: 36px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
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

export const PageNumber = styled.text`
  width: 6px;
  height: 24px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
