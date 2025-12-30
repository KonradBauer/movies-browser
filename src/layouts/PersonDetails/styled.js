import styled from "styled-components";

export const ContentBackground = styled.div`
  background-color: ${({ theme }) => theme.color.mercury};
`;

const ResponsiveContent = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Content = styled(ResponsiveContent)`
  margin-bottom: 100px;
`;

export const TileContent = styled(ResponsiveContent)`
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CastContent = styled(ResponsiveContent)`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-top: 0;
  }
`;

export const CrewContent = styled(ResponsiveContent)`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 21px;
  }
`;

export const SubdivTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: clamp(20px, 3vw, 36px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin: 0 0 32px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
