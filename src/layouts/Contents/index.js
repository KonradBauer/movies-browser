import { BoxTitle, MainBox, PersonTilesList, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import {
  selectMovies,
  selectMoviesPages,
  selectMoviesStatus,
} from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import {
  selectPeople,
  selectPeoplePages,
  selectPeopleStatus,
} from "../../features/peoples/people/peopleSlice";
import { Pagination } from "../Pagination/index";
import { Error } from "../Error/index";

export const Content = () => {
  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);
  const moviesStatus = useSelector(selectMoviesStatus);
  const moviesPage = useSelector(selectMoviesPages);

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
          <Pagination page={moviesPage} totalPages="500" />
        </MainBox>
      )}
    </>
  );
};

export const PeopleContent = () => {
  const people = useSelector(selectPeople);
  const profileSizes = useSelector(selectProfileSizes);
  const peopleStatus = useSelector(selectPeopleStatus);
  const peoplePages = useSelector(selectPeoplePages);

  return (
    <>
      {peopleStatus === "error" ? (
        <Error />
      ) : (
        <MainBox>
          <Section>
            <BoxTitle>Popular people</BoxTitle>
            <PersonTilesList>
              {people.map(({ id, key, name, profile_path }) => (
                <Tile
                  person
                  profileSizes={profileSizes}
                  id={id}
                  key={key}
                  name={name}
                  profile_path={profile_path}
                />
              ))}
            </PersonTilesList>
          </Section>
          <Pagination page={peoplePages} totalPages="500" />
        </MainBox>
      )}
    </>
  );
};
