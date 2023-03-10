import styled from "styled-components";

export const ProdAndReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 0;
  }
`;

const StormGrayColorText = styled.div`
  color: ${({ theme }) => theme.color.stormGray};
`;

const BlackColorText = styled.div`
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const Production = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductionText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const ProductionContent = styled(BlackColorText)``;

export const ReleaseDate = styled.div`
  display: flex;
  gap: 11px;
`;

export const ReleaseDateText = styled(StormGrayColorText)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const ReleaseDateContent = styled(BlackColorText)``;
