import { InfoContainer, FirstInformation, SecondInformation } from "./styled";

export const Information = ({ movie, movieDetails, person, personDetails, role }) => {
  return (
    <InfoContainer person={person} personDetails={personDetails}>
      {movie || movieDetails ? (
        <>
          <FirstInformation movieDetails={movieDetails}>Mulan</FirstInformation>
          <SecondInformation movieDetails={movieDetails}>2020</SecondInformation>
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
