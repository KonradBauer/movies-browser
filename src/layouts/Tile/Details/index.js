import { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <FirstDetails personDetails={personDetails}>
            <FirstDetailsText personDetails={personDetails}>
              {windowWidth > 830 ? "Date of birth:" : "Birth:"}
            </FirstDetailsText>
            <FirstDetailsContent>25.08.1987</FirstDetailsContent>
          </FirstDetails>
          <SecondDetails personDetails={personDetails}>
            <SecondDetailsText personDetails={personDetails}>Place of birth:</SecondDetailsText>
            <SecondDetailsContent>Wuhan, Hubei, China</SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
    </DetailsContent>
  );
};
