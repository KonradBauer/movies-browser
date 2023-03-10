import { useEffect, useState } from "react";
import {
  DetailsContainer,
  FirstDetails,
  FirstDetailsContent,
  FirstDetailsLabel,
  SecondDetails,
  SecondDetailsContent,
  SecondDetailsLabel,
} from "./styled";
import { theme } from "../../../common/Theme/theme";

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
    <DetailsContainer personDetails={personDetails}>
      {movieDetails ? (
        <>
          <FirstDetails>
            <FirstDetailsLabel>Production:</FirstDetailsLabel>
            <FirstDetailsContent>China, USA</FirstDetailsContent>
          </FirstDetails>
          <SecondDetails>
            <SecondDetailsLabel>Release date:</SecondDetailsLabel>
            <SecondDetailsContent>24.10.2020</SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
      {personDetails ? (
        <>
          <FirstDetails personDetails={personDetails}>
            <FirstDetailsLabel personDetails={personDetails}>
              {windowWidth > theme.breakpoints.mobileMax ? "Date of birth:" : "Birth:"}
            </FirstDetailsLabel>
            <FirstDetailsContent>25.08.1987</FirstDetailsContent>
          </FirstDetails>
          <SecondDetails personDetails={personDetails}>
            <SecondDetailsLabel personDetails={personDetails}>Place of birth:</SecondDetailsLabel>
            <SecondDetailsContent>Wuhan, Hubei, China</SecondDetailsContent>
          </SecondDetails>
        </>
      ) : (
        ""
      )}
    </DetailsContainer>
  );
};
