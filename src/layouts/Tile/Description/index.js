import { DescriptionContent } from "./styled";

const Description = ({ movieDetails, personDetails, overview, biography }) => {
  return (
    <>
      {movieDetails && <DescriptionContent>{overview}</DescriptionContent>}
      {personDetails && <DescriptionContent>{biography}</DescriptionContent>}
    </>
  );
};

export default Description;
