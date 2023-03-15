import { InfoContainer, FirstInformation, SecondInformation } from "./styled";

export const Information = ({ movie, movieDetails, person, personDetails, role, title, release_date }) => {
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
            Donnie Yen
          </FirstInformation>
          <SecondInformation person={person} personDetails={personDetails} role={role}>
            {role}
          </SecondInformation>
        </>
      ) : (
        ""
      )}
    </InfoContainer>
  );
};
