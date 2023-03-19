import { BoxTitle, MainBox, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import { selectMovieCredits } from "../../features/movies/movieDetails/movieDetailsAndCreditsSlice";
import { selectPeople } from "../../features/peoples/people/peopleSlice";

export const Content = () => {
  const movies = useSelector(selectMovies);
  const movieCredits = useSelector(selectMovieCredits);
  const posterSizes = useSelector(selectPosterSizes);
  const people = useSelector(selectPeople);
  const profileSizes = useSelector(selectProfileSizes);

  return (
    <MainBox>
      <Tile movieDetails posterSizes={posterSizes} />
      <Section>
        <BoxTitle>Popular movies</BoxTitle>
        <TilesList>
          {movieCredits &&
            movieCredits.cast &&
            movieCredits.cast.map(({ key, profile_path, name, character }) => (
              <Tile
                person
                profileSizes={profileSizes}
                key={key}
                profile_path={profile_path}
                name={name}
                character={character}
              />
            ))}
          <br />
          {movieCredits &&
            movieCredits.cast &&
            movieCredits.crew.map(({ key, profile_path, name, job }) => (
              <Tile
                person
                profileSizes={profileSizes}
                key={key}
                profile_path={profile_path}
                name={name}
                job={job}
              />
            ))}
            <br />
          {people.map(({ key, name, profile_path }) => (
            <Tile person profileSizes={profileSizes} key={key} name={name} profile_path={profile_path} />
          ))}
          {movies.map(
            ({
              key,
              id,
              title,
              release_date,
              poster_path,
              genre_ids,
              vote_average,
              vote_count,
            }) => (
              <Tile
                movie
                key={key}
                posterSizes={posterSizes}
                id={id}
                title={title}
                release_date={release_date}
                poster_path={poster_path}
                genre_ids={genre_ids}
                vote_average={vote_average}
                vote_count={vote_count}
              />
            )
          )}
        </TilesList>
      </Section>
    </MainBox>
  );
};
