import { Container, DescriptionContainer, MovieContainer, Image } from "./styled";
import { Tags } from "./Tags";
import { Information } from "./Information";
import { Raiting } from "./Raiting";
import { Description } from "./Description";
import { Details } from "./Details";
import noPoster from "../../common/images/no-poster.png";
import noPerson from "../../common/images/no-person.png";
import { selectMovies } from "../../features/movies/movie/moviesSlice";
import { useSelector } from "react-redux";
import { APIImageUrl} from "../../features/getAPI";
import { selectPeople } from "../../features/peoples/people/peopleSlice";

export const Tile = ({ movie, movieDetails, person, role, personDetails, srcImage }) => {
  const movies = useSelector(selectMovies);
  const people = useSelector(selectPeople);
  console.log(people);

  return (
    <>
      {movie || movieDetails ? (
        <>
          {movies.map(
            ({ key, title, release_date, poster_path, genre_ids, vote_average, vote_count }) => (
              <Container key={key} movieDetails={movieDetails}>
                {movie ? (
                  <>
                    <Image source={`${APIImageUrl}/w500${poster_path}`} alt="" />
                    <MovieContainer>
                      <DescriptionContainer>
                        <Information movie={movie} title={title} release_date={release_date} />
                        <Tags />
                      </DescriptionContainer>
                      <Raiting vote_average={vote_average} vote_count={vote_count} />
                    </MovieContainer>
                  </>
                ) : (
                  ""
                )}
                {movieDetails ? (
                  <>
                    <Image
                      movieDetails={movieDetails}
                      src={srcImage ? srcImage : noPoster}
                      alt=""
                    />
                    <MovieContainer movieDetails={movieDetails}>
                      <DescriptionContainer movieDetails={movieDetails}>
                        <Information movieDetails={movieDetails} />
                        <Details movieDetails={movieDetails} />
                        <Tags movieDetails={movieDetails} />
                      </DescriptionContainer>
                      <Raiting movieDetails={movieDetails} />
                    </MovieContainer>
                    <Description movieDetails={movieDetails} />
                  </>
                ) : (
                  ""
                )}
              </Container>
            )
          )}
        </>
      ) : (
        ""
      )}
      {person || personDetails ? (
        <>
          {people.map(({ key, name, profile_path }) => (
            <Container key={key} person={person} personDetails={personDetails}>
              {person ? (
                <>
                  <Image person={person} source={`${APIImageUrl}/w185${profile_path}`} alt="" />
                  <Information person={person} name={name} role={role} />
                </>
              ) : (
                ""
              )}
              {personDetails ? (
                <>
                  <Image
                    personDetails={personDetails}
                    src={srcImage ? srcImage : noPerson}
                    alt=""
                  />
                  <DescriptionContainer personDetails={personDetails}>
                    <Information personDetails={personDetails} />
                    <Details personDetails={personDetails} />
                  </DescriptionContainer>
                  <Description personDetails={personDetails} />
                </>
              ) : (
                ""
              )}
            </Container>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};
