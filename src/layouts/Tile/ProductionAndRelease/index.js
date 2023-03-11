import {
  ProdAndReleaseInfo,
  Production,
  ProductionContent,
  ProductionText,
  ReleaseDate,
  ReleaseDateContent,
  ReleaseDateText,
} from "./styled";

export const ProductionAndRelease = () => {
  return (
    <ProdAndReleaseInfo>
      <Production>
        <ProductionText>Production:</ProductionText>
        <ProductionContent>China, USA</ProductionContent>
      </Production>
      <ReleaseDate>
        <ReleaseDateText>Release date:</ReleaseDateText>
        <ReleaseDateContent>24.10.2020</ReleaseDateContent>
      </ReleaseDate>
    </ProdAndReleaseInfo>
  );
};
