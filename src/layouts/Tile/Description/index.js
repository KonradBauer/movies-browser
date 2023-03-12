import { MovieDescription } from "./styled";

export const DescriptionComponent = ({ movieDetails, personDetails }) => {
  return (
    <>
      {movieDetails ? (
        <MovieDescription>
          A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father. A young Chinese maiden
          disguises herself as a male warrior in order to save her father.
        </MovieDescription>
      ) : (
        ""
      )}
      {personDetails ? (
        <MovieDescription personDetails={personDetails}>
          Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began
          modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the
          United States at 10 with her mother, Liu lived there for four years.
        </MovieDescription>
      ) : (
        ""
      )}
    </>
  );
};
