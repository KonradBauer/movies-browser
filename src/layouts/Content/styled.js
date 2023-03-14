import styled from "styled-components";

export const MainBox = styled.div`
  margin: auto;
  margin-top: 56px;
  margin-bottom: 40px;
  width: 1368px;
  height: 1391px;
  border: 1px solid black;
  background: none;
  display: flex;
`;

export const Section = styled.section`
  display: block;
`;

export const BoxTitle = styled.span`
  width: 285px;
  height: 43px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const TilesList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
