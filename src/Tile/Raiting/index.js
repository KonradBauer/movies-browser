import { MaxRate, Raiting, Rate, StarIcon, Votes } from "./styled";

export const RaitingComponent = ({ movieDetails }) => {
  return (
    <Raiting movieDetails={movieDetails}>
      <StarIcon alt="" />
      <Rate movieDetails={movieDetails}>
        7,8
        {movieDetails ? <MaxRate movieDetails={movieDetails}>/ 10</MaxRate> : null}
      </Rate>
      <Votes movieDetails={movieDetails}>35 votes</Votes>
    </Raiting>
  );
};
