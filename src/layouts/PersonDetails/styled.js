import styled from "styled-components";

export const ContentBackground = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
`;

export const Content = styled.div`
  margin: auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const TileContent = styled.div`
  margin: auto;
  padding: 10px;
  max-width: 1368px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const CastContent = styled.div`
  max-width: 1368px;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
    margin-top: 0;
  }
`;

export const CrewContent = styled.div`
  max-width: 1368px;
  margin-top: 64px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    margin-top: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 847px;
  }
`;

export const SubdivTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  display: flex;
  align-items: center;
  height: 43px;
  margin-left: 10px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 20px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-width: 320px;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}px) {
    max-width: 425px;
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 426px) and (max-width: 578px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 579px) and (max-width: 847px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 848px) and (max-width: 1059px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1060px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;