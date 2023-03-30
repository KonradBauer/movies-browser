import { BoxTitle, MainBox, PersonTilesList, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectMovies, selectMoviesStatus } from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import { selectPeople, selectPeopleStatus } from "../../features/peoples/people/peopleSlice";
import { Pagination } from "../Pagination/index";
import { Error } from "../Error/index";

export const Content = () => {
  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);
  const moviesStatus = useSelector(selectMoviesStatus);

  return (
    <>
      {moviesStatus === "error" ? (
        <Error />
      ) : (
        <MainBox>
          <Section>
            <BoxTitle>Popular movies</BoxTitle>
            <TilesList>
              {movies.map(
                ({
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
                    key={id}
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
          <Pagination />
        </MainBox>
      )}
    </>
  );
};

export const PeopleContent = () => {
  const people = useSelector(selectPeople);
  const profileSizes = useSelector(selectProfileSizes);
  const peopleStatus = useSelector(selectPeopleStatus);

  return (
    <>
      {peopleStatus === "error" ? (
        <Error />
      ) : (
        <MainBox>
          <Section>
            <BoxTitle>Popular people</BoxTitle>
            <PersonTilesList>
              {people.map(({ id, name, profile_path }) => (
                <Tile
                  person
                  profileSizes={profileSizes}
                  key={id}
                  id={id}
                  name={name}
                  profile_path={profile_path}
                />
              ))}
            </PersonTilesList>
          </Section>
          <Pagination />
        </MainBox>
      )}
    </>
  );
};
