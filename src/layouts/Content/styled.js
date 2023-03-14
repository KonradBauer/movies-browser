import styled from "styled-components";

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  margin-top: 56px;
  margin-bottom: 40px;
  width: 1368px;
  height: 1391px;
  border: 1px solid black;
`;

export const BoxTitle = styled.span`
  width: 285px;
  height: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
