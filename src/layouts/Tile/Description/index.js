import { DescriptionContent } from "./styled";

export const Description = ({ movieDetails, personDetails, overview, biography }) => {
  return (
    <>
      {movieDetails ? <DescriptionContent>{overview}</DescriptionContent> : ""}
      {personDetails ? (
        <DescriptionContent>{biography}</DescriptionContent>
      ) : (
        ""
      )}
    </>
  );
};
