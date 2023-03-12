import { Info, Title, Year } from "./styled";

export const Information = ({ movie, movieDetails, person, personDetails, role }) => {
  return (
    <Info person={person} personDetails={personDetails}>
      {movie || movieDetails ? (
        <>
          <Title movieDetails={movieDetails}>Mulan</Title>
          <Year movieDetails={movieDetails}>2020</Year>
        </>
      ) : (
        ""
      )}
      {person || personDetails ? (
        <>
          <Title person={person} personDetails={personDetails}>
            Donnie Yen
          </Title>
          <Year person={person} personDetails={personDetails} role={role}>
            {role}
          </Year>
        </>
      ) : (
        ""
      )}
    </Info>
  );
};
