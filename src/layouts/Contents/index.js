import { BoxTitle, MainBox, PersonTilesList, Section, TilesList } from "./styled";
import { Tile } from "../Tile/index";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movie/moviesSlice";
import { selectPosterSizes, selectProfileSizes } from "../../features/configurationSlice";
import { selectPeople } from "../../features/peoples/people/peopleSlice";
import { Pagination } from "../Pagination/index";
import { useQueryParameter } from "../../features/queryParameters";
import searchQueryParamName from "../../features/searchQueryParamName";

export const Content = () => {
  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);
  const totalResults = useSelector(selectMovies);
  const query = useQueryParameter(searchQueryParamName);
  const boxTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular movies";

  return (
    <MainBox>
      <Section>
        <BoxTitle>{boxTitle}Popular movies</BoxTitle>
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
      <Pagination />
    </MainBox>
  );
};

export const PeopleContent = () => {
  const people = useSelector(selectPeople);
  const profileSizes = useSelector(selectProfileSizes);
  const totalResults = useSelector(selectPeople);
  const query = useQueryParameter(searchQueryParamName);
  const boxTitle = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular people";

  return (
    <MainBox>
      <Section>
        <BoxTitle>{boxTitle}Popular people</BoxTitle>
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
      <Pagination />
    </MainBox>
  );
};
