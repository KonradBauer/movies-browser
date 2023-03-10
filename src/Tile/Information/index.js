import { Info, Title, Year } from "./styled";

export const Information = ({ movieDetails }) => {
  return (
    <Info>
      <Title movieDetails={movieDetails}>Mulan</Title>
      <Year movieDetails={movieDetails}>2020</Year>
    </Info>
  );
};
