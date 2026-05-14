import { useState } from "react";

import Description from "../../Description";
import Details from "../../Details";
import Information from "../../Information";
import { Raiting } from "../../Raiting";
import Tags from "../../Tags";
import { APIImageUrl } from "../../../../features/getAPI";

import { Container, DescriptionContainer, Image, ImageWrapper, MovieContainer } from "./styled";

const MovieDetailsTile = ({
  posterSizes,
  poster_path,
  title,
  production_countries,
  release_date,
  genresDetails,
  vote_average,
  vote_count,
  overview,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container movieDetails>
      <ImageWrapper>
        <Image
          movieDetails
          source={`${APIImageUrl}/${posterSizes ? posterSizes[3] : ""}${poster_path}`}
          alt={title || "Movie poster"}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </ImageWrapper>
      <MovieContainer movieDetails>
        <DescriptionContainer movieDetails>
          <Information movieDetails title={title} release_date={release_date} />
          <Details movieDetails production_countries={production_countries} release_date={release_date} />
          <Tags movieDetails genresDetails={genresDetails} />
        </DescriptionContainer>
        <Raiting movieDetails vote_average={vote_average} vote_count={vote_count} />
      </MovieContainer>
      <Description movieDetails overview={overview} />
    </Container>
  );
};

export default MovieDetailsTile;
