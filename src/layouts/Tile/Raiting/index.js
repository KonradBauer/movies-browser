import { MaxRate, RaitingContainer, Rate, StarIcon, Votes } from "./styled";

export const Raiting = ({ movieDetails }) => {
  return (
    <RaitingContainer movieDetails={movieDetails}>
      <StarIcon alt="" />
      <Rate movieDetails={movieDetails}>
        7,8
        {movieDetails ? <MaxRate movieDetails={movieDetails}>/ 10</MaxRate> : null}
      </Rate>
      <Votes movieDetails={movieDetails}>35 votes</Votes>
    </RaitingContainer>
  );
};
