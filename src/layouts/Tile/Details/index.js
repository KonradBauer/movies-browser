import {
  DetailsContent,
  FirstDetails,
  FirstDetailsContent,
  FirstDetailsText,
  SecondDetails,
  SecondDetailsContent,
  SecondDetailsText,
} from "./styled";

export const Details = ({ movieDetails, personDetails }) => {
  return (
    <DetailsContent personDetails={personDetails}>
      {movieDetails ? (
        <>
          <FirstDetails>
            <FirstDetailsText>Production:</FirstDetailsText>
            <FirstDetailsContent>China, USA</FirstDetailsContent>
          </FirstDetails>
          <SecondDetails>
            <SecondDetailsText>Release date:</SecondDetailsText>
            <SecondDetailsContent>24.10.2020</SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
      {personDetails ? (
        <>
          <FirstDetails>
            <FirstDetailsText>Date of birth: :</FirstDetailsText>
            <FirstDetailsContent>25.08.1987</FirstDetailsContent>
          </FirstDetails>
          <SecondDetails>
            <SecondDetailsText>Place of birth:</SecondDetailsText>
            <SecondDetailsContent>Wuhan, Hubei, China</SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
    </DetailsContent>
  );
};
