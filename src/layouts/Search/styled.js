import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  margin: 56px auto;
  padding: 0 16px;
`;

export const SearchResults = styled.div`
font-weight: 600;
font-size: 36px;
line-height: 1.2;
margin-bottom:24px;
color: ${({theme}) => theme.color.woodsmoke };
`;

export const TilesList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  padding: 16px 0;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;