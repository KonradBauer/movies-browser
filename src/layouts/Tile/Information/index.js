import { Info, Title, Year } from "./styled";

export const Information = ({ movie, movieDetails, person, role }) => {
  return (
    <Info person={person}>
      {movie || movieDetails ? (
        <>
          <Title movieDetails={movieDetails}>Mulan</Title>
          <Year movieDetails={movieDetails}>2020</Year>
        </>
      ) : (
        ""
      )}
      {person ? (
        <>
          <Title person={person}>Donnie Yen</Title>
          <Year person={person} role={role}>
            {role}
          </Year>
        </>
      ) : (
        ""
      )}
    </Info>
  );
};
