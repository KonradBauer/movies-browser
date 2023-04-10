import {
  FirstDetails,
  FirstDetailsContent,
  FirstDetailsLabel,
  SecondDetails,
  SecondDetailsContent,
  SecondDetailsLabel,
} from "../styled";

const MovieDetails = ({ production_countries, release_date }) => {
  return (
    <>
      <FirstDetails>
        <FirstDetailsLabel>Production:</FirstDetailsLabel>
        {production_countries
          ? production_countries.map((country) => (
            <FirstDetailsContent key={country.iso_3166_1}>{country.name},</FirstDetailsContent>
          ))
          : ""}
      </FirstDetails>
      <SecondDetails>
        <SecondDetailsLabel>Release date:</SecondDetailsLabel>
        <SecondDetailsContent>{new Date(release_date).toLocaleDateString()}</SecondDetailsContent>
      </SecondDetails>
    </>
  );
};

export default MovieDetails;
