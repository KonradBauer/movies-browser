import { useSelector } from "react-redux";
import {
  selectBackdropSizes,
  selectPosterSizes,
  selectProfileSizes,
} from "../../features/configurationSlice";
import {
  selectMovieCredits,
  selectMovieDetails,
  selectMovieDetailsStatus,
} from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { APIImageUrl } from "../../features/getAPI";
import {
  Background,
  CastContent,
  Content,
  CrewContent,
  List,
  MainInfo,
  Poster,
  Raiting,
  RaitingCap,
  RaitingNumber,
  StyledStar,
  SubdivTitle,
  TileContent,
  Title,
  Votes,
  Wrapper,
} from "./styled";
import { Tile } from "../Tile/index";
import { Error } from "../Error/index";

export const MoviesDetails = () => {
  const movieDetails = useSelector(selectMovieDetails);
  const movieCredits = useSelector(selectMovieCredits);
  const backdropSizes = useSelector(selectBackdropSizes);
  const posterSizes = useSelector(selectPosterSizes);
  const profileSizes = useSelector(selectProfileSizes);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  console.log(movieDetailsStatus);

  return (
    <>
      {movieDetailsStatus === "error" ? (
        <Error />
      ) : (
        <>
          {movieDetails && movieDetails.backdrop_path ? (
            <Background>
              <Wrapper>
                <Poster
                  source={`${APIImageUrl}/${backdropSizes ? backdropSizes[3] : ""}${
                    movieDetails.backdrop_path
                  }`}
                  alt="movie poster"
                />
                <MainInfo>
                  <Title>{movieDetails.title}</Title>
                  <Raiting>
                    <StyledStar />
                    <RaitingNumber>
                      {movieDetails.vote_average?.toFixed(1)}
                      <RaitingCap>/10</RaitingCap>
                    </RaitingNumber>
                  </Raiting>
                  <Votes>{movieDetails.vote_count} votes</Votes>
                </MainInfo>
              </Wrapper>
            </Background>
          ) : (
            ""
          )}
          <Content>
            <TileContent>
              <Tile movieDetails posterSizes={posterSizes} />
            </TileContent>
            <CastContent>
              <SubdivTitle>Cast</SubdivTitle>
              <List>
                {movieCredits &&
                  movieCredits.cast &&
                  movieCredits.cast.map(({ key, id, profile_path, name, character }) => (
                    <Tile
                      person
                      profileSizes={profileSizes}
                      key={key}
                      id={id}
                      profile_path={profile_path}
                      name={name}
                      character={character}
                    />
                  ))}
              </List>
            </CastContent>
            <CrewContent>
              <SubdivTitle>Crew</SubdivTitle>
              <List>
                {movieCredits &&
                  movieCredits.crew &&
                  movieCredits.crew.map(({ key, id, profile_path, name, job }) => (
                    <Tile
                      person
                      profileSizes={profileSizes}
                      key={key}
                      id={id}
                      profile_path={profile_path}
                      name={name}
                      job={job}
                    />
                  ))}
              </List>
            </CrewContent>
          </Content>
        </>
      )}
    </>
  );
};
