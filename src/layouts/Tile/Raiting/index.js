import { MaxRate, RaitingContainer, Rate, StarIcon, Votes } from "./styled";

export const Raiting = ({ movieDetails, vote_average, vote_count }) => {
  return (
    <RaitingContainer movieDetails={movieDetails}>
      <StarIcon alt="" />
      <Rate movieDetails={movieDetails}>
        {vote_average}
        {movieDetails ? <MaxRate movieDetails={movieDetails}>/ 10</MaxRate> : null}
      </Rate>
      <Votes movieDetails={movieDetails}>{vote_count} votes</Votes>
    </RaitingContainer>
  );
};
