import { InfoContainer, FirstInformation, SecondInformation } from "./styled";

export const Information = ({ movie, movieDetails, person, personDetails, character, job, title, release_date, name }) => {
  return (
    <InfoContainer person={person} personDetails={personDetails}>
      {movie || movieDetails ? (
        <>
          <FirstInformation movieDetails={movieDetails}>{title}</FirstInformation>
          <SecondInformation movieDetails={movieDetails}>
            {new Date(release_date).getFullYear()}
          </SecondInformation>
        </>
      ) : (
        ""
      )}
      {person || personDetails ? (
        <>
          <FirstInformation person={person} personDetails={personDetails}>
            {name}
          </FirstInformation>
          <SecondInformation person={person} personDetails={personDetails}>
            {character ? character : job}
          </SecondInformation>
        </>
      ) : (
        ""
      )}
    </InfoContainer>
  );
};
