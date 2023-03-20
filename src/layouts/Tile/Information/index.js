import { useSelector } from "react-redux";
import { selectPeopleCredits } from "../../../features/peoples/peopleDetails/peopleDetailsSlice";
import { InfoContainer, FirstInformation, SecondInformation } from "./styled";

export const Information = ({ movie, movieDetails, person, personDetails, character, job, title, release_date, name }) => {
  const peopleCredits = useSelector(selectPeopleCredits);

  return (
    <InfoContainer person={person} personDetails={personDetails}>
      {movie || movieDetails ? (
        <>
          <FirstInformation movieDetails={movieDetails}>{title}</FirstInformation>
          <SecondInformation movieDetails={movieDetails}>
            {peopleCredits
              ? `${title} ${release_date ? `(${new Date(release_date).getFullYear()})` : ""}` 
              : new Date(release_date).getFullYear()}
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
