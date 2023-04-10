import { FirstInformation, SecondInformation } from "../styled";

const PersonInfo = ({ person, personDetails, name, character, job }) => {
  return (
    <>
      <FirstInformation person={person} personDetails={personDetails}>
        {name}
      </FirstInformation>
      <SecondInformation person={person} personDetails={personDetails}>
        {character ? character : job}
      </SecondInformation>
    </>
  );
};

export default PersonInfo;
